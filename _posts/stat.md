---
title: '如何进行数据统计'
---

### **如何进行数据统计**

数据统计是数据录入的过程。传统的篮球比赛数据统计在纸上进行，只能统计两队的总比分。在本小程序里，记录员则可以统计球员的各项数据，比如得分、篮板、助攻、犯规等等。 不仅统计项大大丰富，而且很大程度上提高了统计效率。**只有联赛管理员和本场比赛的记录员才有权限进行数据统计**。入口在比赛详情页的数据tab：

![entry](/assets/blog/stat/1.png)

#### **主、副记录员的区别**

由上图可见，记录员有主副之分。这两种记录员有哪些不同的权限呢？分别点击上图中两个按钮进入数据统计页面一探究竟：

![primary](/assets/blog/stat/2.png)

![secondary](/assets/blog/stat/3.png)

对比以上两张图可知，主记录员比副记录员拥有更多的权限，主要有以下几项：

* 请求暂停。
* 指定上场球员和换人。
* 计时器。
* 球队弃权。

此外，主记录员和副记录员的技术统计项不同。主记录员记录比赛中基本的统计项，如得分和犯规。副记录员记录比赛中进阶的统计项，如篮板、助攻、抢断、盖帽、失误。因此如果比赛只想统计基本的统计项，指定一名主记录员即可。如果想统计进阶的统计项，需指定两名记录员(一主一副)。此处统计的数据会实时同步到比赛详情页。**注意，数据统计时，只能有一名主记录员，否则会造成数据混乱**。

当一场比赛有多名记录员时，记录的数据会实时同步到所有记录员的手机上，因此记录员的手机必须时刻保持联网状态，不然会造成数据不一致的情况。当一个记录员由断网状态恢复到联网状态时，程序会自动同步未上传的数据，使所有记录员的数据再次一致。

下面以主记录员为例介绍详细的操作方法，副记录员的操作方法基本一致。

#### **赛前准备**

点击主记录员入口，进入到数据统计初始界面。此时比赛还未开始，我们假设每节比赛时间为5分钟。如下图示：

![initial](/assets/blog/stat/4.png)

在比赛开始前需要做一些准备工作，首先是选择双方的上场球员，如下图示：

![select](/assets/blog/stat/5.png)

为了使双方球员区分度更大，可以设置球队的球衣颜色：

![color](/assets/blog/stat/6.png)

到此为止，赛前的准备工作完成。

#### **开始比赛**

比赛开始时，点击计时器开始计时按钮，并设置球权归属。此时开始按钮变为暂停按钮，点击暂停按钮暂停计时：

![start](/assets/blog/stat/7.png)

#### **数据统计**

当球员产生数据时，比如景颂科技的19号吕子良得到2分时，点击吕子良，出现球员的统计对话框，选择相应的统计项即可。球员的数据产生的同时，会生成一条赛况，球队的比分也会相应地更新，如下图：

![stat](/assets/blog/stat/8.png)

#### **结束小节**

当一节比赛时间走完，计时器下方会出现一个按钮，点击则结束本节并进入节间休息。此时界面上出现节间休息时间倒计时。如下图：

![over](/assets/blog/stat/10.png)

#### **暂停**

球队请求暂停时，点击请求暂停按钮。暂停后计时器的下方将出现暂停倒计时：

![pause](/assets/blog/stat/9.png)

#### **查看赛况**

点击赛况可查看球队所有的数据统计记录，记录可删除。记录删除后相应的技术统计会立即更新。如下图示：

![items](/assets/blog/stat/11.png)

#### **球队弃权**

点击右侧设置按钮，出现设置菜单。在菜单中选择弃权的球队。弃权的一方直接判负，比分为 0:20 。如下图示：

![give-up](/assets/blog/stat/12.png)

#### **结束比赛**

当最后一节时间走完，这时有两种情况：

**双方比分不同**<br/>
这时计时器下方将会出现结束比赛按钮。点击按钮则比赛结束。**注意：一定要点击此按钮结束比赛，否则统计数据无法归档**。如下图示：

![end-game](/assets/blog/stat/13.png)

**双方比分相同**<br/>
这时计时器下方将会出现结束本节按钮。点击按钮则进入节间休息，然后进行加时赛，直到分出胜负。如下图示：

![end-game](/assets/blog/stat/14.png)

