// 左侧导航栏类型检测

export interface navInfo {
  name?: unknown;
  path: string;
  index?: string | number;
  children?: navInfo[];
}
