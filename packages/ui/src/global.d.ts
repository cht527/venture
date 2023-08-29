// 允许ci不构建类型声明运行
declare module '*.scss' {
    const css: Record<string, string>;
    export default css;
  }
  