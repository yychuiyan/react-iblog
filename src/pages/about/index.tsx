import React, { useEffect, useRef, useState } from 'react';
import { Form, Row, Col, message, Switch } from 'antd';
import './index.less';
import Save from '@/components/save';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActions from '@/redux/actionCreator';
import Editor from 'for-editor';
const About = (props: any) => {
  // 表单数据
  const [form] = Form.useForm();
  // 获取接口数据
  const [aboutData, setAboutData] = useState<any>();
  // 定义ref
  const editorRef = useRef<any>();
  // 上次保存时间
  const [updateTime, setUpdateTime] = useState();
  // 是否选中
  const [isChecked, setIsChecked] = useState(false);
  // 关于列表
  useEffect(() => {
    props.BlogActions.asyncAboutListAction(isChecked).then((res: any) => {
      let { data } = res.data;
      let updateTime = data.map((item: any) => item.updateTime).join('');
      let createTime = data.map((item: any) => item.createTime).join('');
      let content = data.map((item: any) => item.content).join('');
      setTimeout(() => {
        form.setFieldsValue({ content: content });
      }, 500);
      setUpdateTime(updateTime === '0' ? createTime : updateTime);
      setAboutData(data);
    });
  }, [form, isChecked, props.BlogActions]);

  // 保存
  const submit = async () => {
    await form.validateFields();
    const val = await form.getFieldsValue();
    // 修改和添加是在一块的
    aboutData.length > 0
      ? props.BlogActions.asyncAboutUpdateAction({
          id: aboutData[0]._id,
          content: val.content,
          checked: isChecked,
        }).then((res: any) => {
          message.success('更新成功');
          props.BlogActions.asyncAboutListAction(isChecked).then((res: any) => {
            let { data } = res.data;
            let updateTime = data.map((item: any) => item.updateTime).join('');
            let createTime = data.map((item: any) => item.createTime).join('');
            let content = data.map((item: any) => item.content).join('');
            setTimeout(() => {
              form.setFieldsValue({ content: content });
            }, 500);
            setUpdateTime(updateTime === '0' ? createTime : updateTime);
            setAboutData(data);
          });
        })
      : props.BlogActions.asyncAboutAddAction({
          checked: isChecked,
          content: val.content,
        }).then((res: any) => {
          message.success('新增成功');
          props.BlogActions.asyncAboutListAction(isChecked).then((res: any) => {
            let { data } = res.data;
            let updateTime = data.map((item: any) => item.updateTime).join('');
            let createTime = data.map((item: any) => item.createTime).join('');
            let content = data.map((item: any) => item.content).join('');
            setTimeout(() => {
              form.setFieldsValue({ content: content });
            }, 500);
            setUpdateTime(updateTime === '0' ? createTime : updateTime);
            setAboutData(data);
          });
        });
  };
  // 点击刷新时重新调用接口
  const onRefresh = () => {
    message.success('刷新成功');
    props.BlogActions.asyncAboutListAction().then((res: any) => {
      // 将值设置进表单数据中
      form.setFieldsValue(res.data);
    });
  };
  // 切换状态
  const handleClickChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Save time={updateTime} onRefresh={onRefresh} onSave={submit} />
      <div className="about">
        <div style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
          {isChecked ? (
            <span style={{ fontSize: '20px', marginRight: '1rem' }}>关于我</span>
          ) : (
            <span style={{ fontSize: '20px', marginRight: '1rem' }}>关于本站</span>
          )}
          <Switch
            checked={isChecked}
            onClick={handleClickChecked}
            style={{ fontSize: '20px' }}
          ></Switch>
        </div>

        <Form form={form} className="mx-auto">
          {isChecked ? (
            <Row>
              <Col span={24}>
                <Form.Item name="content">
                  <Editor preview={false} subfield={false} placeholder="关于我" ref={editorRef} />
                </Form.Item>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col span={24}>
                <Form.Item name="content">
                  <Editor preview={false} subfield={false} placeholder="关于本站" ref={editorRef} />
                </Form.Item>
              </Col>
            </Row>
          )}
        </Form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    BlogActions: bindActionCreators(BlogActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(About);
