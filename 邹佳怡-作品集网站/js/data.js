/* ============================================================
   作品集 · 内容数据
   改文案 / 换图 / 调顺序，只动这个文件就够了。
   span：在 12 栅格中占几列（3 / 4 / 6 / 8 / 12）
   ============================================================ */

const SITE = {
  name: "邹佳怡",
  en: "ZOU JIAYI",
  role: "内容策划 · 运营 · AIGC 视觉创作",
  school: "成都文理学院 · 数字媒体艺术",
  headline: "把想法推到<br />能被看见的样子。",
  intro: [
    "我是邹佳怡，成都文理学院数字媒体艺术专业 2027 届。21 岁，英语四级。",
    "专业训练横跨三个方向：<strong>新媒体传播</strong>让我理解内容为什么会被看见，<strong>视觉设计</strong>解决它长什么样，<strong>数字特效技术</strong>负责让它动起来。三件事叠在一起，习惯就变成了：从一个念头出发，一路推到能落地、能被点开的样子。"
  ],
  stats: [
    { k: "Age", label: "年龄", v: "21" },
    { k: "Class", label: "毕业届别", v: "2027" }
  ],
  tools: ["Photoshop", "Premiere", "After Effects", "MAYA", "C4D", "剪映", "Codex", "ChatGPT", "即梦", "Midjourney"],
  contact: [
    { label: "手机", value: "136 2563 0517", href: "tel:13625630517" },
    { label: "邮箱", value: "189506508@qq.com", href: "mailto:189506508@qq.com" }
  ]
};

const CATEGORIES = [
  /* ---------------- 01 产品设计 ---------------- */
  {
    id: "product",
    index: "01",
    title: "产品设计",
    en: "Product Design",
    brief: "同一款果汁的四种媒介表达：产品渲染、宣传海报、电商页面与动态视频。",
    desc: "以「果味爽」果汁为对象的一套完整商业视觉 —— 从一瓶饮料的三维呈现，到货架前让人停下的那一眼。",
    groups: [
      {
        name: "产品设计",
        note: "三维渲染 · 产品主视觉",
        items: [
          { type: "image", span: 6, ar: 1.778, src: "assets/img/01-product-xiyou.webp", title: "果味爽 · 西柚汁", meta: "产品主视觉三视图" },
          { type: "image", span: 6, ar: 1.778, src: "assets/img/02-product-boluo.webp", title: "果味爽 · 菠萝汁", meta: "产品主视觉三视图" }
        ]
      },
      {
        name: "产品平面宣传海报",
        note: "主视觉 KV · 竖版 / 横版",
        items: [
          { type: "image", span: 4, ar: 0.563, src: "assets/img/03-poster-xiyou.webp", title: "西柚汁「冰爽探险」", meta: "竖版宣传海报" },
          { type: "image", span: 8, ar: 1.777, src: "assets/img/04-poster-quanwei.webp", title: "果味爽 · 全口味合集", meta: "横版主视觉" }
        ]
      },
      {
        name: "电商页面",
        note: "详情页 / 商品主图",
        items: [
          { type: "image", span: 4, ar: 1, src: "assets/img/05-ecom-info.webp", title: "产品信息 & 营养成分表", meta: "详情页模块" },
          { type: "image", span: 4, ar: 1, src: "assets/img/06-ecom-giftbox.webp", title: "6 瓶装礼盒", meta: "包装主图" },
          { type: "image", span: 4, ar: 1, src: "assets/img/07-ecom-hero.webp", title: "单品白底图" }
        ]
      },
      {
        name: "AIGC 视频",
        note: "AI 生成 · 动态视觉",
        items: [
          { type: "video", span: 6, ar: 0.5625, src: "assets/video/08-juice-a.mp4", poster: "assets/img/08-juice-a.jpg", title: "冰爽瞬间", meta: "竖版 · 00:06" },
          { type: "video", span: 6, ar: 0.5625, src: "assets/video/09-juice-b.mp4", poster: "assets/img/09-juice-b.jpg", title: "果园溯源", meta: "竖版 · 00:13" }
        ]
      }
    ]
  },

  /* ---------------- 02 IP 设计 ---------------- */
  {
    id: "ip",
    index: "02",
    title: "IP 设计",
    en: "IP Design",
    brief: "红色题材 IP「王泉媛」形象全案：从角色设定到文创周边落地。",
    desc: "以长征女红军王泉媛为原型，用 Q 版三维造型转译红色题材，让历史人物拥有一副年轻人愿意靠近的可爱外壳。",
    note: {
      title: "设计说明",
      body: "王泉媛是致敬长征精神的红色女性 IP，原型为西路军妇女抗日先锋团团长、传奇女红军战士。IP 以「铁血玫瑰 · 坚韧初心」为核心，融合革命勇气与女性力量。形象设计融合历史与美学：青年版着灰布军装、束腰带，眼神刚毅、手持手枪显飒爽，兼具英气与亲和力。精神内核聚焦「九死一生、忠贞不渝」—— 三过草地、四爬雪山，率妇女先锋团血战祁连山，被俘后坚贞不屈，晚年仍坚守信仰奉献社会。IP 传递无畏、忠诚、坚韧的红色精神，是传承长征文化、弘扬女性力量的鲜活符号。"
    },
    groups: [
      {
        name: "王泉媛 · IP 形象全案",
        note: "设定集 · 上下两页（点击可看大图）",
        items: [
          { type: "image", span: 6, ar: 0.707, src: "assets/img/10-ip-wangquanyuan-1.webp", title: "IP 设定集 · 上", meta: "人物介绍 / 三视图 / 变装秀 / 表情包 / 海报 / 漫画 / 动作 / 文创" },
          { type: "image", span: 6, ar: 0.707, src: "assets/img/11-ip-wangquanyuan-2.webp", title: "IP 设定集 · 下", meta: "表情包 / 漫画 / 变装秀 / 海报 / 文创场景" }
        ]
      }
    ]
  },

  /* ---------------- 03 AIGC 漫剧 ---------------- */
  {
    id: "aigc",
    index: "03",
    title: "AIGC 漫剧",
    en: "AIGC Film",
    brief: "AIGC 短片《最佳方案》：从概念、海报、分镜到成片的全流程实践。",
    desc: "「当世界替你做好所有选择，你还会选择自己吗？」—— 三代女性的爱与选择，用 AI 影像讲完。海报、截帧与片段，是同一条片子的三种切面。",
    groups: [
      {
        name: "《最佳方案》海报设计",
        note: "主视觉 KV · 三种风格",
        items: [
          { type: "image", span: 4, ar: 0.667, src: "assets/img/12-plan-poster-1.webp", title: "科幻版主海报", meta: "THE PERFECT PLAN · 城市夜景" },
          { type: "image", span: 4, ar: 0.677, src: "assets/img/13-plan-poster-2.webp", title: "黑白特写版", meta: "THE BEST PLAN · 侧脸叠影" },
          { type: "image", span: 4, ar: 0.667, src: "assets/img/14-plan-poster-3.webp", title: "米色经典版", meta: "2025.6.1 · 字体排版" }
        ]
      },
      {
        name: "视频截帧",
        note: "成片画面 · 16:9",
        items: [
          { type: "image", span: 6, ar: 1.777, src: "assets/img/15-plan-frame-1.webp", title: "系统启动", meta: "未来都市 · 开场" },
          { type: "image", span: 6, ar: 1.777, src: "assets/img/16-plan-frame-2.webp", title: "天台 · 黄昏", meta: "主角特写" },
          { type: "image", span: 12, ar: 1.777, src: "assets/img/17-plan-frame-3.webp", title: "抉择", meta: "情绪爆发 · 近景" }
        ]
      },
      {
        name: "视频片段",
        note: "正片节选 · 00:10",
        items: [
          { type: "video", span: 12, ar: 1.777, src: "assets/video/18-plan.mp4", poster: "assets/img/18-plan.jpg", title: "《最佳方案》正片片段", meta: "AIGC 影像 · 16:9" }
        ]
      }
    ]
  },

  /* ---------------- 04 运营数据 ---------------- */
  {
    id: "ops",
    index: "04",
    title: "运营数据",
    en: "Content Ops",
    brief: "学习类产品的内容推广与达人投放 —— 从账号调性分析到推广方案与脚本输出。",
    desc: "对接达人与自运营账号的内容数据：让内容不只是被看见，而是能被转化。",
    groups: [
      {
        name: "对接达人数据展示",
        note: "学习类产品推广 · 达人投放",
        desc: "学习类产品推广：深层剖析达人账号调性和用户画像，深入产品推广、最大程度利用达人账号粉丝，推广产品功能、使用方法与使用情景，为不同达人输出对应的推广方案和脚本。",
        items: [
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/02.webp", title: "考研英语 · 笔记拆解", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/03.webp", title: "AI 自动生成思维导图", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/04.webp", title: "医学生高效背书方法", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/05.webp", title: "AI 出题 · 刷题工具", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/06.webp", title: "法考记忆法 · 挖空功能", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/07.webp", title: "法考挖空背书法", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/08.webp", title: "英语单词笔记学习法", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/09.webp", title: "大学生高绩点学习方法", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/10.webp", title: "Word 高效学习技巧", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/11.webp", title: "挖空功能设置演示", meta: "达人账号数据" },
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/12.webp", title: "挖空规则设置演示", meta: "达人账号数据" }
        ]
      },
      {
        name: "自运营账号数据",
        note: "自运营账号 · 内容与播放表现",
        items: [
          { type: "image", span: 4, ar: 0.462, src: "assets/img-ops/01.webp", title: "自运营账号作品与播放数据", meta: "账号内容表现" }
        ]
      }
    ]
  }
];