---
title: "HTML 元素参考"
date: "2018-07-11"
tags: ['html']
---

## 什么是HTML元素？

HTML定义了各种各样的元素，它们在HTML文档中起着各不相同的作用。

元素是一种用来向浏览器说明文档内容的工具，其效果体现在其内容之上。一般来说，元素由开始标签、内容和结束标签组成。浏览器不会在页面上显示元素的标签，它的任务是通过HTML元素来解读HTML文档，然后向用户呈现一个体现了HTML元素作用的视图。

空元素

虚元素

## HTML元素的属性

元素可以使用属性进行配置，属性写在开始标签内，具有名称和值两部分。有一些全局属性可以用于所有HTML元素。

* 局部属性
* 全局属性
* 布尔属性：这种属性不需要设定值，只需要将属性名添加到元素中即可。
* 自定义属性：用户可自定义属性，但必须以data-开头

### 全局属性

* id：用来给元素分配一个唯一的标识符，通常用于将样式应用到元素上或在Javascript脚本中用来选择元素。另外还可以用来导航到文档中的特定位置。
* class：用于将元素归类，通常是为了能够找出文档中的某一类元素并作为CSS样式的应用目标。一个元素可以被归为多个类别，只需在class属性值中提供多个用空格分开的类名即可。
* style：用来直接在元素上定义CSS样式。
* lang：用于说明元素内容使用的语言，目的是让浏览器其表达元素内容的方式，比如改变使用的引号，在使用了文字朗读器(或别的残障辅助技术)的情况下正确发音。
* title：提供了元素的额外信息，浏览器通常用这些信息显示工具提示。
* tabindex：用于改变默认的键盘焦点的转移顺序。tabindex值为1的元素会被第一个选中，用户按一下tab键后，tabindex值为2的元素会被选中，以此类推。tabindex值设置为-1的元素不会被选中。
* accesskey：用于设定一个或几个用来选择页面上元素的快捷键，常用于表单中。其目的是让网站的熟客可以使用快捷键访问经常用到的元素。Windows下，使用Alt键和accesskey属性值对应的键的按键组合来触发accesskey机制(聚焦于不同元素)。
* contenteditable：HTML5新加的属性，用于使用户能够修改页面上的内容。
* spellcheck：用来表明浏览器是否应对元素的内容进行拼写检查。这个属性只有用在用户可编辑的元素上才有意义。目前大多数浏览器中的拼写检查都会忽略lang属性，而是基于用户所用操作系统中的语言设置或浏览器的语言设置。
* contextmenu：用于为元素设定快捷菜单，这种菜单会在被触发时(用户鼠标右击时)弹出。浏览器尚不支持。
* dir：用于规定元素中文字的方向，其有效值有两个：ltr和rtl。
* dragable：用来表示元素是否可被拖放
* dropzone：
* hidden：为布尔属性，表示相关元素不需要被用户关注，浏览器一般将其隐藏

## 文档及元素据元素(Document metadata)

### 文档元素

#### DOCTYPE

<!DOCTYPE html>告诉浏览器要处理的是HTML5文档

#### html

`<html>`元素是HTML文档的根元素，表示文档中HTML部分的开始。

`manifest`属性

#### head

`<head>`元素是HTML文档的元数据集合，用来向浏览器提供文档的一些信息，此外还可以包含脚本和对外部资源(CSS样式表等)的引用。

必须有一个`title`元素，其他元数据元素可有可无

#### body

HTML文档的元数据和文档信息包含着`head`元素中，文档的内容则包含在`body`元素中。body元素告诉浏览器该向用户显示HTML文档的哪个部分

### 元数据元素

#### title

`title`元素表示HTML文档的标题或者名字，浏览器通常将该元素的内容显示在其窗口顶部或标签页的标签上。

#### base

`base`元素可用于设置一个基准url，使HTML文档中的相对链接在此基础上进行解析。

herf、target

#### meta

`meta`元素用来定义文档的各种元数据，一个文档中可以包含多个`meta`元素

name、content、charset、http-equiv

预定义元数据类型

* application name
* author
* description
* generator
* keywords

声明字符编码

模拟HTTP标头字段

#### link

引入外部资源(最常见的是CSS样式)

```html
<link rel="stylesheet" type="text/css" herf="sttyles.css" />
<link rel="shortcut icon" type="image/x-icon" herf="favicon.ico" />
```

#### style

定义文档的内嵌CSS样式

media: screen、print

## 文本语义元素(Text-level semantics)

### 超链接

 a

作用：生成超链接

局部属性：href、hreflang、media、rel、target、type

用法：

* 生成文档外超链接
* 生成文档内超链接
* 设定浏览环境

习惯样式：

```css
a:link, a:visited {
  color: blue;
  text-decoration: underline;
  cursor: auto;
}
a:link:active, a:visited:active {
  color: blue
}
```

### 文字标记

 b

作用：对元素内容加粗显示，无实际语义

习惯样式：`b {font-style: bold;}`

 em

作用：表示对一段文字的强调

习惯样式：`em {font-style: italic;}`

 i

作用：表示一段文字与周围内容有本质区别

用法：常用于外文词语、科技术语甚至某人的想法(与言语相区别)

习惯样式：`i {font-style: italic;}`

 s

作用：表示不准确与校正

习惯样式：`s {text-decoration: line-through;}`

 strong

作用：表示一段重要的文字

习惯样式：`strong {font-style: bold;}`

 u

作用：为元素内容加下划线，无实际语义

习惯样式：`u {text-decoration: underline;}`

 small

作用：小号字体内容

用法：免责声明和澄清声明

习惯样式：`small {font-size: smaller;}`

 sub & sup

作用：上标和下标

习惯样式：

```css
sub { vertical-align: sub; font-size: smaller; }
sup { vertical-align: super; font-size: smaller; }
```

 ins

 del

### 换行

 br & wbr

作用：控制内容换行，br强制换行，wbr建议换行

### 输入输出

 code

作用：代码片段

习惯样式：`code {font-family: monospace;}`

 var

作用：变量

习惯样式：`var {font-style: italic;}`

 samp

作用：表示程序或计算机的输出

习惯样式：`samp {font-family: monospace;}`

 kbd

作用：表示用户输入

习惯样式：`kbd {font-family: monospace;}`

### 标题引用、引文、定义和缩写

 abbr

作用：表示缩写

局部属性：title

 dfn

作用：术语定义或解释一个词的含义

局部属性：title

 q

作用：表示引自它处的内容

习惯样式：

```css
q { display: inline; }
q:before { content: open-quoto; }
q:after { content: close-quoto; }
```

 cite

作用：表示所引用作品的标题

习惯样式：`cite {font-style: italic;}`

### 表意语言

 ruby

 rb

 rt

 rtc

 rp

 bdi

 bdo

### 日期时间

 data

 time

 mark

 span

## 分组元素(Grouping content)

 p

 hr

 pre

 blockquote

### 列表

 ol

 ul

 li

 dl

 dt

 dd

### 插图

 figure

 figcaption

 main

 div

## 文档分节元素(Sections)

### 标题

h1、h2、h3、h4、h5、h6

hgroup

### 节

 section

### 首部和尾部

 header

 footer

### 导航

 nav

### 文章

artical

### 联系信息

address

### 附注栏

 aside

## 制表元素(Tabular data)

### 使用table、tr、td生成基本的表格

table、tr、td是每个表格都必须要有的元素

#### table

习惯样式：

```css
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}
```

#### tr

表格中的行

习惯样式：

```css
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
```

#### td

表格中的单元格

习惯样式：

```css
td {
  display: table-cell;
  vertical-align: inherit;
}
```

### 添加表头

#### th

表示表头的单元格

习惯样式：

```css
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
}
```

### 为表格添加结构

#### tbody

表格的主体

习惯样式：

```css
tfoot {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
```

#### thead

表格的标题行

习惯样式：

```css
tfoot {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
```

#### tfoot

表格的尾行

习惯样式：

```css
tfoot {
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;
}
```

### 为表格添加标题

 caption

 colgroup

 col

## 表单元素(Forms)

 form

 label

 input

 button

 select

 datalist

 optgroup

 option

 textarea

 output

 progress

 meter

 fieldset

 legend

## 嵌入内容元素(Embedded content)

 picture

 source

 img

 iframe

 embed

 object

 param

 video

 audio

 track

 map

 area

## 交互元素(Interactive elements)

 detailed

 summary

## 脚本元素(Scripting)

 script

type、src、defer、async、charset

defer推迟执行脚本

async异步执行脚本

 noscript

用来向禁用了Javascript或浏览器不支持Javascript的用户显示一些信息

 template

 canvas