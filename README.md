# VCPE-UI

## 项目背景
“加快数字化发展，大力推进产业数字化转型”是“十四五”规划中的重点，近年来，国内的私募基金已陆续展开数字化转型工作，搭建投资全生命周期的数字化平台是实现转型的必要途径，对投资业务赋能和日常工作提效具有重要意义。该项目是我们在公司内部开发数字化平台过程中，经过全面而深刻的业务理解和反复技术实践后所沉淀的成果。
## 项目介绍

VCPE-UI 是一个基于 React.js 技术的 Web 前端组件库。针对私募股权投资领域中的“募、投、管、退”环节，以常规的中后台标准化组件为基础，通过特定的业务逻辑抽象和交互设计，实现了一套通用的 UI 封装。经过实际应用验证，该解决方案运行稳定、高效。我们相信 VCPE-UI 将成为私募基金搭建数字化平台过程中 Web 开发人员的得力助手。

## 项目特点
1. 强调在私募基金投资领域的通用性，充分考虑私募基金行业的特有业务需求，提供了专门针对私募投资流程的组件，如项目投资轮次、DealTeam成员管理


2. 高度可定制和扩展，方便根据不同项目需求进行个性化定制

3. 良好的文档和示例，帮助开发者快速上手和理解组件的使用方式

4. 作为"产品-设计-研发”三位一体的“标准化模块语言", 搭建高效协作沟通的桥梁

5. 最大化 Web 开发人效，节约项目组的研发资源


## TODO

- [ ] 官网 dumi
- [ ] config




## 安装和使用
```
npm install vcpe-ui
```
公共的颜色变量以及全量样式，通过 `vcpe-ui/index.css` 提供。

### demo
```
import 'vcpe-ui/index.css';
import { Button } from 'vcpe-ui';


export function IndexPage() {
  return (
    <>
      <Button>按钮</Button>
    </>
  );
}
```

## 开发
```shell
npm i -g pnpm
pnpm i
pnpm run start
```

## 贡献
我们非常欢迎对VCPE-UI的贡献。如果您发现问题或有改进建议，请在GitHub上提交issue或发起pull request。
