import { AxiosRequestConfig, AxiosInstance } from 'axios';

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<ApiResponse>;
    (url: string, config?: AxiosRequestConfig): Promise<ApiResponse>;
  }
}

export interface ApiResponse<T = any> {
  error: number;
  msg: string;
  code: number;
  data: T;
}
// 登录
interface LoginParams {
  username: string;
  password: string;
}
interface AdminRegister {
  username: string;
  password: string;
  verifyPassword: string;
  role_id: string;
}
interface AdminAdd {
  username: string;
  password: string;
  role_id: string;
}
interface AdminUpdateStatus {
  status: boolean;
  id: string;
}
interface AdminUpdate {
  id: string;
  username: string;
  password: string;
  role_id: string;
}
interface CategoryUpdate {
  id: string;
  name: string;
  articleNum: number;
  createTime: string;
  updateTime: string;
}
interface TagsUpdate {
  id: string;
  name: string;
}
interface TagsUpdateStatus {
  status: boolean;
  id: string;
}
interface AboutAdd {
  isChecked: boolean;
  updateTime: string;
  createTime: string;
  content: string;
}
interface AboutUpdate {
  id: string;
  isChecked: boolean;
  updateTime: string;
  createTime: string;
  content: string;
}
interface MessageStatus {
  id: string;
  auditStatus: boolean;
}
interface IArticleAdd {
  publishStatus: number;
  status: number;
  views: number;
  comment: number;
  like: number;
  categories: string;
  content: string;
  cover: string;
  introduction: string;
  isComment: boolean;
  isLike: boolean;
  isTop: boolean;
  tags: string[];
  title: string;
}
interface IArticleStatus {
  status: number;
  id: string;
}
interface IArticleTopStatus {
  isTop: boolean;
  id: string;
}
interface IArticlePublishStatus {
  isTop: boolean;
  id: string;
}
interface IArticleUpdate {
  id: string;
  publishStatus: number;
  status: number;
  views: number;
  comment: number;
  like: number;
  categories: string;
  content: string;
  cover: string;
  introduction: string;
  isComment: boolean;
  isLike: boolean;
  isTop: boolean;
  tags: string[];
  title: string;
}
interface FriendlyAdd {
  avatar: string;
  desc: string;
  link: string;
  name: string;
}
interface FriendlyUpdate {
  id: string;
  avatar: string;
  desc: string;
  link: string;
  name: string;
}
interface CoverData {
  name: string;
  thumbUrl: string;
}
interface EssayAdd {
  content: string;
  cover: CoverData[];
}
interface EssayUpdate {
  id: string;
  content: string;
  cover: CoverData[];
}
interface RightsUpdate {
  id: string;
  label: string;
  pagepermission: number;
}
interface RightsChildrenUpdate {
  id: string;
  label: string;
  pagepermission: number;
}
interface RoleUpdate {
  id: string;
  role_name: string;
  role_type: number;
  rights: Array;
}
export interface Api {
  Login(params: LoginParams): Promise<ApiResponse>;
  adminRegister(params: AdminRegister): Promise<ApiResponse>;
  loginOut(): Promise<ApiResponse>;
  getAdminList(page: number, pageSize: number, username: string): Promise<ApiResponse>;
  adminDelete(id: string): Promise<ApiResponse>;
  adminAdd(params: AdminAdd): Promise<ApiResponse>;
  adminUpdate(params: AdminUpdate): Promise<ApiResponse>;
  adminStatusUpdate(params: AdminUpdateStatus): Promise<ApiResponse>;
  getCategories(page: number, pageSize: number, name: string): Promise<ApiResponse>;
  categoryAdd(name: string): Promise<ApiResponse>;
  categoryDelete(id: string): Promise<ApiResponse>;
  categoryUpdate(params: CategoryUpdate): Promise<ApiResponse>;
  getTagList(page: number, pageSize: number, name: string): Promise<ApiResponse>;
  tagAdd(name: string): Promise<ApiResponse>;
  tagDelete(id: string): Promise<ApiResponse>;
  tagUpdate(params: TagsUpdate): Promise<ApiResponse>;
  tagStatusUpdate(params: TagsUpdateStatus): Promise<ApiResponse>;
  getAboutList(checked: boolean): Promise<ApiResponse>;
  aboutAdd(params: AboutAdd): Promise<ApiResponse>;
  aboutUpdate(params: AboutUpdate): Promise<ApiResponse>;
  getComments(page: number, pageSize: number, articleTitle: string): Promise<ApiResponse>;
  commentDelete(id: string): Promise<ApiResponse>;
  getMessages(page: number, pageSize: number, auditStatus: boolean): Promise<ApiResponse>;
  messageStatusUpdate(params: MessageStatus): Promise<ApiResponse>;
  messageDelete(id: string): Promise<ApiResponse>;
  getArticleList(
    page: number,
    pageSize: number,
    title: string,
    status: number,
    publishStatus: number
  ): Promise<ApiResponse>;
  getArticleListAll(status: number, publishStatus: number): Promise<ApiResponse>;
  articleAdd(params: IArticleAdd): Promise<ApiResponse>;
  articleStatusUpdate(params: IArticleStatus): Promise<ApiResponse>;
  articleTopStatusUpdate(params: IArticleTopStatus): Promise<ApiResponse>;
  articlePublishStatusUpdate(params: IArticlePublishStatus): Promise<ApiResponse>;
  articleUpdate(params: IArticleUpdate): Promise<ApiResponse>;
  articleDetail(id: string): Promise<ApiResponse>;
  articleDelete(id: string): Promise<ApiResponse>;
  upload(params: FormData): Promise<ApiResponse>;
  getFriendlyList(page: number, pageSize: number, name: string): Promise<ApiResponse>;
  friendlyDelete(id: string): Promise<ApiResponse>;
  friendlyInsert(params: FriendlyAdd): Promise<ApiResponse>;
  friendlyUpdate(params: FriendlyUpdate): Promise<ApiResponse>;
  getEssaylyList(page: number, pageSize: number, content: string): Promise<ApiResponse>;
  essayDelete(id: string): Promise<ApiResponse>;
  essayInsert(params: EssayAdd): Promise<ApiResponse>;
  essayUpdate(params: EssayUpdate): Promise<ApiResponse>;
  getRightsList(page: number, pageSize: number, title: string): Promise<ApiResponse>;
  rightsDelete(id: string): Promise<ApiResponse>;
  rightsChildrenDelete(id: string): Promise<ApiResponse>;
  rightsUpdate(params: RightsUpdate): Promise<ApiResponse>;
  rightsChildrenUpdate(params: RightsChildrenUpdate): Promise<ApiResponse>;
  getRoleList(page: number, pageSize: number, role_name: string): Promise<ApiResponse>;
  roleDelete(id: string): Promise<ApiResponse>;
  roleUpdate(params: RoleUpdate): Promise<ApiResponse>;
}
