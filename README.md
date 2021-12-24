# Tailwind CSS 在 React 中使用

使用 `create-react-app` 创建React 项目，并学习使用 `Tailwind CSS`

## 安装使用与配置

- 安装 `Taillwind` 

  ```bash
  npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
  ```

- 安装 配置`CRACO`  （若 第一步没有安装[ Tailwind CSS v2.0 PostCSS 7 兼容性版本](https://www.tailwindcss.cn/docs/installation#post-css-7)，则不需要安装配置CRACO）

  ```bash
  npm install @craco/craco
  ```

  PS: 由于 Create React App 不能让您覆盖原生的 PostCSS 配置，所以我们还需要安装[ CRACO ](https://github.com/gsoft-inc/craco)才能配置 Tailwind。

  

  ```diff-json
    {
      // ...
      "scripts": {
  -     "start": "react-scripts start",
  -     "build": "react-scripts build",
  -     "test": "react-scripts test",
  +     "start": "craco start",
  +     "build": "craco build",
  +     "test": "craco test",
        "eject": "react-scripts eject"
      },
    }
  ```

  根目录添加 `craco.config.js` 如下：

  ```js
  // craco.config.js
  module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }
  ```

- [配置 `tailwind.config.js`](https://www.tailwindcss.cn/docs/configuration)

  使用 `npx tailwindcss-cli@latest init` 生成配置文件

  或

  ```js
  // 手动添加
  module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class' ('media' 为自动 跟随系统; 'class' 为手动切换)
    theme: {  
      extend: {},
    }, // 在 theme 部分中，您可以定义调色板、字体、类型比例、边框大小、断点等任何与您网站视觉设计有关的东西。
    variants: {
      extend: {},
    }, // 在 variants 部分允许您控制为每个核心功能插件生成哪些 变体 。
    plugins: [], // 在 plugins 部分允许您向 Tailwind 注册插件，这些插件可用于生成额外功能类、组件、基本样式或自定义变体。
  }
  ```

- 在tailwind 配置中 移除生产环境中 未使用到的样式声明

  ```js
  module.exports = {
      purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  }
  ```

- 在需要用到的样式中 （xxx/xxx/style.css）加入

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  /* Tailwind 会在构建时将这些指令转换成所有基于您配置的设计系统生成的样式文件。 */
  ```

## 字符串拼接

- `tailwindcss` 使用的是正则 来匹配 需要清除的HTML，重要的是避免在您的模板中使用字符串连接动态创建类字符串，否则 `PurgeCSS` 将不知道保存这些类。

  ```js
   /[^<>"'`\s]*[^<>"'`\s:]/g
  ```

- ```js
  // 不要使用字符串连接来创建类名
  <div class="text-{{  error  ?  'red'  :  'green'  }}-600"></div>
  
  
  // 动态选择一个完整的类名
  <div class="{{  error  ?  'text-red-600'  :  'text-green-600'  }}"></div>
  只要一个类名出现在您的模板中，PurgeCSS 就不会删除它。
  ```

## 边距

### 内边距

- 使用 `p{t|r|b|l}-{size}` 控制元素一侧的内边距。

  ```ts
  <div class="pt-6 ...">pt-6</div> /* padding-top: 6rem */
  <div class="pr-4 ...">pr-4</div>
  <div class="pb-8 ...">pb-8</div>
  <div class="pl-2 ...">pl-2</div>
  ```

- 使用 `px-{size}` 和 `py-{size}`  分别x轴和y轴添加内边距

  ```ts
  <div class="py-8 ...">py-8</div> /* padding: 8rem 0 */
  ```

- 使用`p-{size}`  控制4个边的内边距

- ```ts
  <div class="p-0 ...">py-8</div> /* padding: 0px */
  <div class="p-px ...">py-8</div> /* padding: 1px */
  ```

- [定制 与 变体](https://www.tailwindcss.cn/docs/padding#-5)

### 外边距

- 与内边距一直

- `m{t|r|b|l}-{size}`

- `mx-{size}` 和 `my-{size}`

- 负外边距 `-m{side?}-{size}`

  ```ts
  <div class="w-32 h-16 bg-fuchsia-300 ..."></div>
  <div class="-mt-8 bg-fuchsia-500 ...">-mt-8</div>
  ```

### 间距

- 使用 `space-x-{amount}` 控制子元素之间的水平空间。

  ```html
  <div class="flex space-x-4 ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  ```

- 使用 `space-y-{amount}` 控制元素之间的垂直空间。

  ```html
  <div class="space-y-6 ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  ```

- 反转子元素顺序

  如果您的元素是按相反的顺序排列的(例如使用 `flex-row-reverse` 或 `flex-col-reverse`)，使用 `space-x-reverse` 或 `space-y-reverse` 实用程序来确保空间被添加到每个元素的正确一侧。

- 在 `Flex`布局中也可以使用`gap-{size}`来控制间距

## 尺寸

### 宽度

- `w-{size}`

  ```css
  w-0				width: 0px
  w-px			width: 1px
  w-1				width: 0.25rem
  w-10			width: 2.5rem
  w-auto			width: auto
  w-1/3           width: 33.333333%
  w-7/12			width: 58.333333% /* n/3 n/4 n/5 n/6 n/12 */
  w-auto			width: auto
  w-full			width: 100%
  w-screen 		width: 100vw
  ```

- ```css
  w-min			width: min-content
  w-max			width: max-content
  /* max-content 在一个父元素上设置该元素后，元素的宽度会以子元素内最长的一个为准，子元素表现得会好像设置了white-space:nowrap一样一行展示
  
  min-content 在一个父元素上设置该元素后，子元素会按照最短断行进行换行*/
  ```

- `min-w-{size}`

  ```css
  min-w-0			min-width: 0px;
  min-w-full		min-width: 100%;
  min-w-min		min-width: min-content;
  min-w-max		min-width: max-content;
  ```

- `max-w-{size}`

  ```css
  max-w-0				max-width: 0rem;
  max-w-none			max-width: none;
  max-w-xs			max-width: 20rem;
  max-w-sm			max-width: 24rem;
  max-w-md			max-width: 28rem;
  max-w-lg			max-width: 32rem;
  max-w-xl			max-width: 36rem;
  max-w-2xl			max-width: 42rem;
  max-w-7xl			max-width: 80rem;
  max-w-full			max-width: 100%;
  max-w-min			max-width: min-content;
  max-w-max			max-width: max-content;
  max-w-prose			max-width: 65ch;
  max-w-screen-sm		max-width: 640px;
  max-w-screen-md		max-width: 768px;
  max-w-screen-lg		max-width: 1024px;
  max-w-screen-xl		max-width: 1280px;
  max-w-screen-2xl	max-width: 1536px;
  ```

### 高度

- `h-{size}` 与宽度用法相同

- `min-h-{size}`

  ```css
  min-h-0			min-height: 0px;
  min-h-full		min-height: 100%;
  min-h-screen	min-height: 100vh;
  ```

- `max-h-{size}`

  ```css
  max-h-0			max-height: 0px;
  max-h-px		max-height: 1px;
  max-h-0.5		max-height: 0.125rem;
  max-h-1			max-height: 0.25rem;
  max-h-1.5		max-height: 0.375rem;
  max-h-2			max-height: 0.5rem;
  max-h-2.5		max-height: 0.625rem;
  max-h-3			max-height: 0.75rem;
  max-h-3.5		max-height: 0.875rem;
  max-h-4			max-height: 1rem;
  max-h-5			max-height: 1.25rem;
  
  max-h-96	max-height: 24rem;
  max-h-full	max-height: 100%;
  max-h-screen	max-height: 100vh;
  ```

## 排版

### 字体系列

- ```css
  font-sans	/*font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";*/
  font-serif	/*font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;*/
  font-mono	/*font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;*/
  
  
  /*The quick brown fox jumps over the lazy dog.一去二三里烟村四五家亭台六七座八九十支花*/
  ```

- 定制 `theme.fontFamily`

  ```js
  // tailwind.config.js
    module.exports = {
      theme: {
        fontFamily: {
         'sans': ['ui-sans-serif', 'system-ui', ...],
         'serif': ['ui-serif', 'Georgia', ...],
         'mono': ['ui-monospace', 'SFMono-Regular', ...],
         'display': ['Oswald', ...], 
         'body': ['"Open Sans"', ...],  /// 配置新的字体
        }
      }
    }
  ```

### 字体大小

- 使用 `text-{size}` 控制元素的字体大小。

  ```css
  text-xs			font-size: 0.75rem;line-height: 1rem;
  text-sm			font-size: 0.875rem;line-height: 1.25rem;
  text-base		font-size: 1rem;line-height: 1.5rem;
  text-lg			font-size: 1.125rem;line-height: 1.75rem;
  text-xl			font-size: 1.25rem;line-height: 1.75rem;
  text-2xl		font-size: 1.5rem;line-height: 2rem;
  text-3xl		font-size: 1.875rem;line-height: 2.25rem;
  text-4xl		font-size: 2.25rem;line-height: 2.5rem;
  text-5xl		font-size: 3rem;line-height: 1;
  text-6xl		font-size: 3.75rem;line-height: 1;
  text-7xl		font-size: 4.5rem;line-height: 1;
  text-8xl		font-size: 6rem;line-height: 1;
  text-9xl		font-size: 8rem;line-he	ight: 1;
  ```

### [字体平滑度](https://www.tailwindcss.cn/docs/font-smoothing)

### 字体样式

- ```css
  italic			font-style: italic;
  not-italic		font-style: normal;
  ```

- ```css
  font-thin				font-weight: 100;
  font-extralight			font-weight: 200;
  font-light				font-weight: 300;
  font-normal				font-weight: 400;
  font-medium				font-weight: 500;
  font-semibold			font-weight: 600;
  font-bold				font-weight: 700;
  font-extrabold			font-weight: 800;
  font-black				font-weight: 900;
  
  /* 感觉这个不如直接写 font-weight: 100 - 900 */
  ```

### Font Variant Numeric

- [用来控制数字变形的功能类](https://www.tailwindcss.cn/docs/font-variant-numeric)

- 使用 `font-variant-numeric` 功能类为数字、分数和序号标记启用其他字形（**在支持它们的字体中**）。

  这些功能类是可组合的，因此您可以通过组合 HTML 中的多个类来实现多个 `font-variant-numeric` 功能。

  ```html
  <p class="ordinal slashed-zero tabular-nums ...">1234567890</p>
  ```

  请注意，**很多字体不支持**这些功能*（例如，对堆叠分数的支持特别少见），因此，根据您所使用的字体序列，其中的一些功能类可能无效。

### 字母间距和行高

- `tracking-{size}`  控制字母的间距

  ```css
  tracking-tighter	letter-spacing: -0.05em;
  tracking-tight		letter-spacing: -0.025em;
  tracking-normal		letter-spacing: 0em;
  tracking-wide		letter-spacing: 0.025em;
  tracking-wider		letter-spacing: 0.05em;
  tracking-widest		letter-spacing: 0.1em;
  ```

- `leading-{size}` 控制行高

  ```css
  leading-3	line-height: .75rem;
  leading-4	line-height: 1rem;
  leading-5	line-height: 1.25rem;
  leading-6	line-height: 1.5rem;
  leading-7	line-height: 1.75rem;
  leading-8	line-height: 2rem;
  leading-9	line-height: 2.25rem;
  leading-10	line-height: 2.5rem;
  ```

  ```css
  /* 相对行高根据字体大小 给它一个相对的行高*/
  leading-none
  leading-tight
  leading-snug
  leading-normal
  leading-relaxed
  leading-loose 
  ```

### 列表

- ```css
  /* list-style-type */
  list-none		list-style-type: none;
  list-disc		list-style-type: disc;
  list-decimal	list-style-type: decimal;
  ```

- ```css
  /* list-style-position */
  list-inside		list-style-position: inside;
  list-outside	list-style-position: outside;
  ```

### placehoder

- 使用 `placeholder-{color}` 控制元素占位文本的颜色。

  ```html
  <input class="placeholder-gray-500" placeholder="example">
  <input class="placeholder-red-300" placeholder="example">
  ```

- 使用 `placeholder-opacity-{amount}` 控制元素的占位文本颜色的不透明度。

  ```html
  <input class="placeholder-gray-500 placeholder-opacity-75" placeholder="example">
  ```

### 文本

- 颜色`text-{color}`

  ```css
  text-white
  text-current
  text-black
  text-purple-500
  ```

- 透明度`text-opacity-{amount}`

  ```css
  text-opacity-100
  text-opacity-50
  text-opacity-0
  ```

- 对齐方式

  ```css
  /* 水平 */
  text-left		text-align: left;
  text-center		text-align: center;
  text-right		text-align: right;
  text-justify	text-align: justify;
  
  /* 垂直 */
  align-baseline		vertical-align: baseline;
  align-top			vertical-align: top;
  align-middle		vertical-align: middle;
  align-bottom		vertical-align: bottom;
  align-text-top		vertical-align: text-top;
  align-text-bottom	vertical-align: text-bottom;
  ```

- ```css
  underline		text-decoration: underline; /* 下划线 */
  line-through	text-decoration: line-through; /* 贯穿文字删除线 */
  no-underline	text-decoration: none; /* 删除样式 */
  ```

- 文本大小写

  ```css
  uppercase		text-transform: uppercase;
  lowercase		text-transform: lowercase;
  capitalize		text-transform: capitalize; /* 单词首字母大写 */
  normal-case		text-transform: none;
  ```

### 文本溢出

- | Class             | Properties                                                   |
  | ----------------- | ------------------------------------------------------------ |
  | truncate          | overflow: hidden; text-overflow: ellipsis; white-space: nowrap; |
  | overflow-ellipsis | text-overflow: ellipsis;                                     |
  | overflow-clip     | text-overflow: clip;                                         |

- ```css
  /* 换行 */
  break-normal	overflow-wrap: normal;word-break: normal;
  break-words	 	overflow-wrap: break-word;
  break-all		word-break: break-all;
  ```

## 背景

### 背景图片

- ```css
  /* 背景图片在滚动时的表现 */
  bg-fixed	background-attachment: fixed;
  bg-local	background-attachment: local;
  bg-scroll	background-attachment: scroll;
  ```

- 自定义图片

  ```js
  // tailwind.config.js
    module.exports = {
      theme: {
        extend: {
          backgroundImage: {
           'my-image': "url('/img/my-img.jpg')",
          }
        }
      }
    }
  ```

  配置之后采用 `bg-{key}` 的形式

  ```html
  <div className="w-1/2 h-80 bg-my-image"></div>
  ```

### 渐变色

- `bg-gradient-{direction}`  `from-{color} via-{color} to-{color}`

  ```html
  <div class="bg-gradient-to-r from-green-400 to-blue-500 ..."></div>
  
  // 颜色不能是透明 transparent
  ```

### 背景大小

- ```css
  bg-auto		background-size: auto;
  bg-cover	background-size: cover;
  bg-contain	background-size: contain;
  ```

- 自定义大小

  ```js
   // tailwind.config.js
    module.exports = {
      theme: {
        backgroundSize: {
         '50%': '50%',
         '16': '4rem',
        }
      }
    }
  ```

### 背景位置

- `bg-{side}`

  | Class           | Properties                         |
  | --------------- | ---------------------------------- |
  | bg-bottom       | background-position: bottom;       |
  | bg-center       | background-position: center;       |
  | bg-left         | background-position: left;         |
  | bg-left-bottom  | background-position: left bottom;  |
  | bg-left-top     | background-position: left top;     |
  | bg-right        | background-position: right;        |
  | bg-right-bottom | background-position: right bottom; |
  | bg-right-top    | background-position: right top;    |
  | bg-top          | background-position: top;          |

## 边框

### 圆角

- `rounded-{size}`

  ```css
  rounded-sm 			border-radius: 0.125rem;
  rounded				border-radius: 0.25rem;
  rounded-lg			border-radius: 0.5rem;
  rounded-full		border-radius: 0.5rem;
  ```

- `rounded-none` 删除现有的边框半径

- `rounded-{t|r|b|l|tl|tr|br|bl}-{size}`  设置不同位置的圆角

### 边框宽度

- `border-{size}` 
- `border-{t|r|b|l}-{size}` 单独给一条边设置

### 边框颜色

- `border-{color}`

- `border-opacity-{amount}` 不透明度

- `border-{style}`  边框样式

  ```css
  border-solid		border-style: solid;
  border-dashed		border-style: dashed;
  border-dotted		border-style: dotted;
  border-double		border-style: double;
  border-none			border-style: none;
  ```

### 分割线

- `divide-{x|y}-{size}` 给一个方向上的元素之间添加边框

### 轮廓环

- `ring-{size}`

## 交互

### 表单样式

- `appearance-none` 清除原生表单样式

### 光标

- | Class              | Properties           |
  | ------------------ | -------------------- |
  | cursor-auto        | cursor: auto;        |
  | cursor-default     | cursor: default;     |
  | cursor-pointer     | cursor: pointer;     |
  | cursor-wait        | cursor: wait;        |
  | cursor-text        | cursor: text;        |
  | cursor-move        | cursor: move;        |
  | cursor-help        | cursor: help;        |
  | cursor-not-allowed | cursor: not-allowed; |

### 用户选择

- ```
  select-none 	user-select: none
  select-text 	user-select: text
  select-all		user-select: all
  select-aut		ouser-select: auto
  ```

## 过度

### [过度属性](https://www.tailwindcss.cn/docs/transition-property)

- 使用 `transition-{properties}` 来指定哪些属性在变化时应该过渡。

### 过渡时间

- 使用 `duration-{amount}` 功能来控制元素的过渡持续时间。

### 过度函数

- `ease-{timing}`

  ```css
  ease-linear			transition-timing-function: linear;
  ease-in				transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  ease-out			transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ease-in-out			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ```

### 过度延迟

- 使用 `delay-{amount}` 功能类来控制某个元素的过渡延迟（transition-delay）属性。

## 动画

-  `animate-spin` 线性旋转动画
-  `animate-ping` 使一个元素像雷达 ping 或水波纹一样缩放和消逝
-  `animate-pulse` 使元素轻轻地淡入和淡出
- `animate-bounce` 使元素上下跳动

## 转换

首先要有 `transform`类

### 变换原点

- `origin-{position}`

### 缩放

- `scale-{x|y}-{百分比}`

### 旋转

- `rotate-{angle}`

### 平移

- `translate-{x|y}-{amount}`

### 倾斜

- `skew-{x|y}-{amount}`

## [布局](https://www.tailwindcss.cn/docs/container)

*这里只列举一部分常用属性*

### z-index

- `z-{amount}`

### 可见性

- `visible`  可见
- `invisible ` 不可见

### 定位

- ```css
  static		position: static;
  fixed		position: fixed;
  absolute	position: absolute;
  relative	position: relative;
  sticky		position: sticky;
  ```

## [Flex](https://www.tailwindcss.cn/docs/flex-direction)

- 先要使用 `flex` 类

- `flex-{direction}`

  ```css
  flex-row				flex-direction: row;
  flex-row-reverse		flex-direction: row-reverse;
  flex-col				flex-direction: column;
  flex-col-reverse		flex-direction: column-reverse;
  ```

- `flex-wrap `控制是否换行

- 控制缩放

  ```css
  flex-1			flex: 1 1 0%;
  flex-auto		flex: 1 1 auto;
  flex-initial	flex: 0 1 auto;
  flex-none		flex: none;
  ```

  `flex-grow` 和 `flex-shrink`

- `order-{order}`控制 flex 的 items 的顺序 

- 使用 `justify-{position}` 沿着容器主轴的对齐方式

  ```css
  justify-start	justify-content: flex-start;
  justify-end		justify-content: flex-end;
  justify-center	justify-content: center;
  justify-between	justify-content: space-between;
  justify-around	justify-content: space-around;
  justify-evenly	justify-content: space-evenly;
  ```

- 使用`items-{position}` 控制横轴的对齐方式

  ```css
  items-start		align-items: flex-start;
  items-end		align-items: flex-end;
  items-center	align-items: center;
  items-baseline	align-items: baseline;
  items-stretch	align-items: stretch;
  ```

## [Grid](https://www.tailwindcss.cn/docs/grid-template-columns)

- 先要使用 `grid`类

- 使用 `grid-cols-{n}` 创建有 *n* 个同等大小的列的网格

- 使用 `grid-rows-{n}` 创建有*n*个同等大小的行的网格

- 使用 `grid-flow-{keyword}` 功能类来控制网格布局的自动放置顺序

  ```css
  grid-flow-row			grid-auto-flow: row;
  grid-flow-col			grid-auto-flow: column;
  grid-flow-row-dense		grid-auto-flow: row dense;
  grid-flow-col-dense		grid-auto-flow: column dense;
  ```

## 响应式

- 根据常用的设备分辨率方案，默认内置了 5 个断点：

  | 断点前缀 | 最小宽度 | CSS                                  |
  | -------- | -------- | ------------------------------------ |
  | `sm`     | 640px    | `@media (min-width: 640px) { ... }`  |
  | `md`     | 768px    | `@media (min-width: 768px) { ... }`  |
  | `lg`     | 1024px   | `@media (min-width: 1024px) { ... }` |
  | `xl`     | 1280px   | `@media (min-width: 1280px) { ... }` |
  | `2xl`    | 1536px   | `@media (min-width: 1536px) { ... }` |

- 使用时 选择某个断点 + `:`

  ```html
  <div class="w-16 md:w-32 lg:w-48"></divdiv>
  ```

## 悬停、焦点等状态

- `hover: xxx`

  ```html
  <button class="bg-red-500 hover:bg-red-700">
    Hover me
  </button>
  ```

- `focus: xxx`

  ```html
  <input class="focus:ring-2 focus:ring-blue-600">
  ```

- `active: xxx`

  ```html
  <button class="bg-green-500 active:bg-green-700">
    Click me
  </button>
  ```

- `group` 和 `group-{xxx}: xxx` 如果您需要当鼠标悬停在一个指定的父元素上时对其子元素设置样式，给父元素添加 `group` 类，并且为子元素的功能类添加 `group-hover:` 前缀

  ```html
  <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
    <p class="text-indigo-600 group-hover:text-gray-900">New Project</p>
  </div>
  ```

## 自定义

在 `tailwind.config.js` 中的`theme` 可以配置自己新的需求，(调色板、类型比例、字体、断点、边框半径值等)。 使用方式为  `类名-{key}` 

```js
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./assets/images/hhh.jpg')",
        'dog-bg': "url('./assets/images/dog-bg.jpg')",
      },
      backgroundSize: {
        'sm-bg': '3rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// html
<div className="bg-dog-bg"></div>
```

##  [变体](https://www.tailwindcss.cn/docs/configuring-variants)

`tailwind.config.js` 文件中的 `variants` 部分是您控制每个核心插件应该启用哪些变体的地方。

```js
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['active'],
      // ...
      borderColor: ['focus-visible', 'first'],
      // ...
      textColor: ['visited'],
    }
  },
}
```

每个属性都是一个核心插件名称，指向一个要为该插件生成的变体数组。

以下是支持的开箱即用的变体：

| 变体            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| `responsive`    | Responsive variants like `sm`, `md`, `lg`, and `xl`.         |
| `dark`          | Targets dark mode.                                           |
| `motion-safe`   | Targets the `prefers-reduced-motion: no-preference` media query. |
| `motion-reduce` | Targets the `prefers-reduced-motion: reduce` media query.    |
| `first`         | Targets the `first-child` pseudo-class.                      |
| `last`          | Targets the `last-child` pseudo-class.                       |
| `odd`           | Targets the `odd-child` pseudo-class.                        |
| `even`          | Targets the `even-child` pseudo-class.                       |
| `visited`       | Targets the `visited` pseudo-class.                          |
| `checked`       | Targets the `checked` pseudo-class.                          |
| `group-hover`   | Targets an element when a marked parent matches the `hover` pseudo-class. |
| `group-focus`   | Targets an element when a marked parent matches the `focus` pseudo-class. |
| `focus-within`  | Targets the `focus-within` pseudo-class.                     |
| `hover`         | Targets the `hover` pseudo-class.                            |
| `focus`         | Targets the `focus` pseudo-class.                            |
| `focus-visible` | Targets the `focus-visible` pseudo-class.                    |
| `active`        | Targets the `active` pseudo-class.                           |
| `disabled`      | Targets the `disabled` pseudo-class.                         |

# 总结

- 文档 以及 demo 中 只使用到了 `tailwind` 的部分类

- 自定义扩展部分，可以让我们有很大的发挥空间

- 如果一个element样式很复杂的时候，类名就会变得很长，虽然让我们省去了命名的麻烦，但很长的类名看起来也不舒服，这时候 可以使用 `@apply` 去提取一个新的类名

  ```css
  // xxx.css
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white;
  }
  ```

  ```html
  // xxx.html
  <div className="btn btn-blue"></div>
  ```

- 在使用`tsx`或`jsx` 的时候不能动态生成类名，这一点不太方便

- 响应式的类能很方便的做媒体查询

