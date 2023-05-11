import React, { useEffect, useState } from 'react';
import { Badge, Button, Form, message, Modal, Radio, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, ExclamationCircleOutlined, AuditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import MyPagination from '@/components/pagination';
import { auditStatusOptions } from '@/utils/constants';
import dayjs from 'dayjs';
import './index.less';
const { confirm } = Modal;
interface DataType {
  key: React.Key;
  _id?: string;
  nickName?: string;
  avatar?: string;
  messageTime: string;
  auditTime: string;
  children?: DataType[];
}
const Message = (props: any) => {
  const columns: ColumnsType<DataType> = [
    {
      title: '昵称',
      dataIndex: 'nickName',
      width: 100,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '当前回复内容',
      dataIndex: 'currentReplayContent',
    },
    // {
    //   title: '目标回复ID',
    //   dataIndex: 'targetReplayId',
    // },
    {
      title: '目标回复内容',
      dataIndex: 'targetReplayContent',
    },
    {
      title: '审核状态',
      dataIndex: 'auditStatus',
      width: 80,
      render: status => {
        const current = auditStatusOptions.filter(item => item.value === +status);
        const enums: any = {
          1: 'success',
          2: 'error',
          3: 'warning',
        };
        return (
          <Space direction="vertical">
            <Badge status={enums[current[0].value]} text={current[0].label} />
          </Space>
        );
      },
    },

    {
      title: '留言时间',
      dataIndex: 'messageTime',
      render: time => {
        return dayjs(time * 1000).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '审核时间',
      dataIndex: 'auditTime',
      render: time => {
        return time && dayjs(time * 1000).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 120,
      render: item => {
        return (
          <div>
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => {
                messageDelete(item);
              }}
              style={{ marginRight: '5px' }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<AuditOutlined />}
              onClick={() => {
                messageAudit(item);
              }}
              style={{ marginRight: '5px' }}
              disabled={!item.children}
            ></Button>
          </div>
        );
      },
    },
  ];

  // 留言列表
  const [list, setList] = useState([]);
  // 分页总数
  const [total, setTotal] = useState(0);
  // 当前第几页
  const [currentPage, setCurrentPage] = useState(1);
  // 每页显示条数
  const [pageSize, setPageSize] = useState(10);
  // 窗口
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 表单数据
  const [form] = Form.useForm();
  // 将id值存放
  const [id, setId] = useState();
  // 点击审核时获取到的数据列表
  const [auditContent, setAuditContent] = useState<any>();
  // 获取留言列表数据
  useEffect(() => {
    props.BlogActions.asyncMessageListAction(currentPage, pageSize, 0).then((res: any) => {
      // 获取留言
      let { data, totalCount, page, pageSize } = res.data;
      // 无子节点情况下，按钮
      data.forEach((item: any) => {
        if (item.children.length === 0) {
          item.children = '';
        }
      });
      setList(data);
      setTotal(totalCount);
      setCurrentPage(page);
      setPageSize(pageSize);
    });
  }, [currentPage, pageSize, props.BlogActions]);

  // 删除留言
  const messageDelete = (item: any) => {
    confirm({
      title: '你确定要删除吗?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        // 先将要删除的数据过滤掉再调用接口
        setList(list.filter((it: any) => it._id !== item._id));
        message.success('留言删除成功');
        props.BlogActions.asyncMessageDeleteAction(item._id).then(() => {
          props.BlogActions.asyncMessageListAction(currentPage, pageSize, 0).then((res: any) => {
            // 获取留言
            let { data, totalCount, page, pageSize } = res.data;
            setList(data);
            setTotal(totalCount);
            setCurrentPage(page);
            setPageSize(pageSize);
          });
        });
      },
    });
  };
  // 审核
  const messageAudit = (item: any) => {
    setTimeout(() => {
      form.setFieldsValue({
        auditStatus: +item.auditStatus,
      });
    }, 100);
    setAuditContent(item);
    setId(item._id);
    setIsModalOpen(true);
  };
  const status: any = {
    1: '通过',
    2: '驳回',
  };
  // 点击确定
  const handleConfirm = async () => {
    await form.validateFields();
    const val = form.getFieldsValue();

    // 一键审核
    if (id === 0) {
      props.BlogActions.asyncMessageStatusUpdateAction({
        auditStatus: val.auditStatus,
        id: id,
      }).then(() => {
        props.BlogActions.asyncMessageListAction(currentPage, pageSize, 0).then((res: any) => {
          // 获取留言
          let { data, totalCount, page, pageSize } = res.data;
          setList(data);
          setTotal(totalCount);
          setCurrentPage(page);
          setPageSize(pageSize);
        });
        message.success(`一键审核${status[val.auditStatus]}成功`);
        form.resetFields();
        setIsModalOpen(false);
      });
    } else {
      if (auditContent.children) {
        auditContent?.children.map((audit: any) =>
          props.BlogActions.asyncMessageStatusUpdateAction({
            auditStatus: val.auditStatus,
            id: audit._id,
          })
        );
        //父节点数据
        props.BlogActions.asyncMessageStatusUpdateAction({
          auditStatus: val.auditStatus,
          id: id,
        }).then(() => {
          props.BlogActions.asyncMessageListAction(currentPage, pageSize, 0).then((res: any) => {
            // 获取留言
            let { data, totalCount, page, pageSize } = res.data;
            setList(data);
            setTotal(totalCount);
            setCurrentPage(page);
            setPageSize(pageSize);
          });
          message.success(`审核${status[val.auditStatus]}成功`);
          form.resetFields();
          setIsModalOpen(false);
        });
      } else {
        //父节点数据
        props.BlogActions.asyncMessageStatusUpdateAction({
          auditStatus: val.auditStatus,
          id: id,
        }).then(() => {
          props.BlogActions.asyncMessageListAction(currentPage, pageSize, 0).then((res: any) => {
            // 获取留言
            let { data, totalCount, page, pageSize } = res.data;
            setList(data);
            setTotal(totalCount);
            setCurrentPage(page);
            setPageSize(pageSize);
          });
          message.success(`审核${status[val.auditStatus]}成功`);
          form.resetFields();
          setIsModalOpen(false);
        });
      }
    }
  };
  // 关闭窗口
  const handleCancel = (e: any) => {
    form.resetFields();
    setIsModalOpen(false);
  };

  // 跳转页数据显示
  const onChangePage = (page: any, pageSize: any, params = '') => {
    // 重新调用接口将参数传递过去
    props.BlogActions.asyncCommentsAction(page, pageSize, params).then((res: any) => {
      // 获取列表数据
      let { data } = res.data;
      setList(data);
      // 切换行
      setCurrentPage(page);
      // 根据页面数据显示页码
      setPageSize(pageSize);
    });
  };
  return (
    <div>
      <div className="cate_title">
        <Button type="primary" onClick={() => messageAudit({ _id: 0 })}>
          一键审核
        </Button>
        {/* <div className="cate_search">
          <Select defaultValue={0} style={{ width: 120 }} options={auditStatusOptions}></Select>
          <Search className="search" allowClear placeholder="请输入留言名称" enterButton />
        </div> */}
      </div>
      <Modal
        open={isModalOpen}
        title={<div style={{ textAlign: 'left' }}>添加审核</div>}
        okText="新增"
        cancelText="取消"
        onCancel={handleCancel}
        onOk={() => {
          handleConfirm();
        }}
      >
        <Form form={form} layout="vertical" name="basic" className="userAddFrom">
          <Form.Item name="auditStatus" rules={[{ required: true, message: '请选择审核状态' }]}>
            <Radio.Group>
              <Radio value={1}>通过</Radio>
              <Radio value={2}>驳回</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        rowKey={(item: any) => {
          return item._id;
        }}
        columns={columns}
        dataSource={list}
        expandRowByClick={true}
        defaultExpandAllRows={true}
        pagination={false}
      />
      <MyPagination
        pageSize={pageSize}
        currentPage={currentPage}
        total={total}
        onChange={onChangePage}
      ></MyPagination>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(Message);
