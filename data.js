window.STOCK_TABLE_DATA = {
  asOf: "2026-07-05",
  version: "v1.0 初版",
  title: "中国AI产业链选股表",
  ruleNote: "覆盖A股/港股/中概。潜力 = 质量（利润池持续性 × 边际变化）× 定价未充分程度。持续性 = 紧缺度 × 扩产难度 × 定价权（相乘，任一≤3判不可持续）。与 Global Stocks 同一套框架，另加中国特有约束：国产替代进度=紧缺度的放大器；出口管制既是护城河也是天花板。v1.0为框架初版：环节与龙头已定，估值列与依据列待首次周更联网刷新，未核实数字一律标「待刷新」不伪造。",
  scoreAnchors: [
    "紧缺度：9-10=国产化率<20%且订单排满（先进制程代工/EUV前道设备）；7-8=国产化率20-50%且交期>26周；5-6=偏紧但可获得；≤3=充分竞争现货可得",
    "扩产难度：9-10=受出口管制卡口或技术代差>3年（先进制程/EDA全流程/HBM）；7-8=2-3年（设备验证周期/先进封装）；5-6=1-2年（液冷/电源扩线）；≤3=<1年可扩（组装/PCB常规品）",
    "定价权：9-10=独家国产替代且在提价；7-8=双寡头价稳、成本可传导（光模块头部/接口芯片）；5-6=集中度高但大客户压价（服务器整机）；≤3=年度降价惯例（代工成熟制程/组装）",
    "估值双锚（按环节类型）：平台/软件=FPE vs 自身5年中枢；制造/设备=FPE + 在手订单能见度；周期品=毛利率历史分位 + P/B（禁用FPE排序）；未盈利科创板标的=PS + 研发管线里程碑，仓位额外减半"
  ],
  rows: [
    {rank:1, segment:"半导体设备", vtype:"设备", tier:"core", scarcity:9, pool:8, expand:9, pricing:8, status:"待刷新", marginal:"待刷新", leaders:"北方华创 002371 / 中微公司 688012 / 拓荆科技 688072", evidence:"出口管制倒逼国产验证加速；先进产线国产设备渗透率持续抬升（读数待周更核实）", fpe:"待刷新", anchor2:"在手订单/合同负债能见度：待刷新", priced:"待刷新", verdict:"国产替代最硬逻辑环节，待估值刷新后定档", sizeBand:"待定"},
    {rank:2, segment:"晶圆代工", vtype:"制造", tier:"core", scarcity:9, pool:7, expand:9, pricing:6, status:"待刷新", marginal:"待刷新", leaders:"中芯国际 0981.HK/688981 / 华虹 1347.HK", evidence:"先进制程产能为AI芯片国产化的总瓶颈；成熟制程价格竞争压毛利（读数待周更核实）", fpe:"待刷新", anchor2:"产能利用率/资本开支指引：待刷新", priced:"待刷新", verdict:"瓶颈地位明确但盈利弹性受折旧压制，估值锚待刷新", sizeBand:"待定"},
    {rank:3, segment:"AI算力芯片", vtype:"制造", tier:"debate", scarcity:8, pool:8, expand:8, pricing:7, status:"待刷新", marginal:"待刷新", leaders:"寒武纪 688256 / 海光信息 688041", evidence:"英伟达受限市场的国产替代受益者；供给受代工产能约束（订单与出货待周更核实）", fpe:"待刷新", anchor2:"PS+出货量里程碑：待刷新", priced:"待刷新", verdict:"叙事最强但估值最贵的环节，纪律：只在证伪条款框架内持有", sizeBand:"待定"},
    {rank:4, segment:"光模块", vtype:"制造", tier:"core", scarcity:7, pool:8, expand:6, pricing:7, status:"待刷新", marginal:"待刷新", leaders:"中际旭创 300308 / 新易盛 300502 / 天孚通信 300394", evidence:"全球AI光互连主力供应商（海外收入为主）；1.6T放量节奏是关键变量（待周更核实）", fpe:"待刷新", anchor2:"1.6T订单能见度：待刷新", priced:"待刷新", verdict:"中国公司里少数吃全球AI利润池的环节", sizeBand:"待定"},
    {rank:5, segment:"先进封装/封测", vtype:"制造", tier:"debate", scarcity:7, pool:6, expand:7, pricing:6, status:"待刷新", marginal:"待刷新", leaders:"长电科技 600584 / 通富微电 002156", evidence:"Chiplet与2.5D封装为先进制程受限下的算力补偿路径（产能与订单待周更核实）", fpe:"待刷新", anchor2:"先进封装收入占比：待刷新", priced:"待刷新", verdict:"逻辑顺但利润率待验证", sizeBand:"待定"},
    {rank:6, segment:"EDA/IP", vtype:"平台", tier:"debate", scarcity:8, pool:5, expand:9, pricing:6, status:"待刷新", marginal:"待刷新", leaders:"华大九天 301269 / 芯原股份 688521", evidence:"国产EDA全流程覆盖率仍低、替代空间大但兑现慢（收入增速待周更核实）", fpe:"待刷新", anchor2:"FPE vs 自身中枢：待刷新", priced:"待刷新", verdict:"长逻辑短兑现，估值常年偏贵", sizeBand:"待定"},
    {rank:7, segment:"存储/HBM链", vtype:"周期", tier:"debate", scarcity:7, pool:6, expand:8, pricing:6, status:"待刷新", marginal:"待刷新", leaders:"兆易创新 603986 / 香农芯创 300475（长鑫未上市）", evidence:"存储周期位置+国产HBM进度双变量（毛利率分位待周更核实）", fpe:"—（周期品）", anchor2:"毛利率历史分位+P/B：待刷新", priced:"待刷新", verdict:"周期品纪律：GM高分位即顶部警戒", sizeBand:"待定"},
    {rank:8, segment:"接口/互连芯片", vtype:"制造", tier:"core", scarcity:7, pool:6, expand:7, pricing:8, status:"待刷新", marginal:"待刷新", leaders:"澜起科技 688008 / 聚辰股份 688123", evidence:"内存接口全球双寡头之一，AI服务器带动量价齐升（订单待周更核实）", fpe:"待刷新", anchor2:"DDR5渗透率+新品放量：待刷新", priced:"待刷新", verdict:"少数有全球定价权的中国芯片设计公司", sizeBand:"待定"},
    {rank:9, segment:"AI服务器/整机", vtype:"制造", tier:"watch", scarcity:5, pool:6, expand:4, pricing:4, status:"待刷新", marginal:"待刷新", leaders:"工业富联 601138 / 浪潮信息 000977", evidence:"收入弹性大但组装环节定价权弱、毛利率低（待周更核实）", fpe:"待刷新", anchor2:"毛利率趋势：待刷新", priced:"待刷新", verdict:"量的故事非利润率的故事，只做贝塔", sizeBand:"待定"},
    {rank:10, segment:"PCB/CCL", vtype:"制造", tier:"debate", scarcity:6, pool:6, expand:5, pricing:6, status:"待刷新", marginal:"待刷新", leaders:"沪电股份 002463 / 生益科技 600183 / 胜宏科技 300476", evidence:"高多层/HDI供需偏紧，AI服务器单机PCB价值量数倍提升（待周更核实）", fpe:"待刷新", anchor2:"高端产能利用率：待刷新", priced:"待刷新", verdict:"景气度高但扩产周期短，盯供给", sizeBand:"待定"},
    {rank:11, segment:"液冷/温控", vtype:"设备", tier:"debate", scarcity:6, pool:5, expand:5, pricing:5, status:"待刷新", marginal:"待刷新", leaders:"英维克 002837", evidence:"高功率密度机柜使液冷从可选变必选（订单增速待周更核实）", fpe:"待刷新", anchor2:"数据中心业务订单：待刷新", priced:"待刷新", verdict:"渗透率提升逻辑清晰，护城河一般", sizeBand:"待定"},
    {rank:12, segment:"数据中心电源", vtype:"设备", tier:"watch", scarcity:6, pool:5, expand:5, pricing:5, status:"待刷新", marginal:"待刷新", leaders:"麦格米特 002851 / 欧陆通 300870", evidence:"HVDC/高压直流与大功率电源随AI机柜功率抬升（待周更核实）", fpe:"待刷新", anchor2:"服务器电源收入占比：待刷新", priced:"待刷新", verdict:"跟随环节，估值合理才碰", sizeBand:"待定"},
    {rank:13, segment:"IDC/算力租赁", vtype:"制造", tier:"watch", scarcity:5, pool:5, expand:4, pricing:4, status:"待刷新", marginal:"待刷新", leaders:"润泽科技 300442 / 万国数据 9698.HK", evidence:"智算中心供给放量快、同质化竞争，上架率是唯一硬校验（待周更核实）", fpe:"待刷新", anchor2:"上架率+单千瓦租金：待刷新", priced:"待刷新", verdict:"重资产低门槛，警惕产能过剩", sizeBand:"待定"},
    {rank:14, segment:"半导体材料", vtype:"制造", tier:"watch", scarcity:7, pool:4, expand:7, pricing:5, status:"待刷新", marginal:"待刷新", leaders:"沪硅产业 688126 / 安集科技 688019 / 南大光电 300346", evidence:"光刻胶/大硅片国产化率低、替代确定性高但单环节利润池小（待周更核实）", fpe:"待刷新", anchor2:"验证导入进度：待刷新", priced:"待刷新", verdict:"逻辑硬、弹性小，组合配角", sizeBand:"待定"},
    {rank:15, segment:"云平台/大模型", vtype:"平台", tier:"core", scarcity:6, pool:9, expand:8, pricing:6, status:"待刷新", marginal:"待刷新", leaders:"腾讯 0700.HK / 阿里巴巴 9988.HK/BABA", evidence:"中国AI应用层最大利润池；资本开支上行期利润率承压（capex指引待周更核实）", fpe:"待刷新", anchor2:"FPE vs 自身5年中枢 + FCF yield：待刷新", priced:"待刷新", verdict:"估值相对全球云平台折价，胜负手在AI变现节奏", sizeBand:"待定"}
  ],
  portfolioRules: [
    "总敞口：中国科技股合计不超过权益仓位的40%；单一环节≤15%，单票≤10%",
    "科创板未盈利标的仓位在档位基础上再减半；北向/外资流向连续4周流出时暂停加仓",
    "对冲：组合贝塔过高时用恒生科技指数期权或减仓对冲，不裸空个股",
    "A/H两地上市优先选折价一侧；中概退市风险标的只用可损失仓位",
    "触发纪律：任一可证伪条款触发，48小时内机械执行减仓，不辩经"
  ],
  tiers: [
    "core（核心）：半导体设备 / 晶圆代工 / 光模块 / 接口芯片 / 云平台——瓶颈地位或全球定价权明确",
    "debate（观察辩论）：AI芯片 / 先进封装 / EDA / 存储 / PCB / 液冷——逻辑成立但估值或兑现存分歧",
    "watch（跟踪）：服务器整机 / 电源 / IDC / 材料——跟随环节，只在明显低估时参与"
  ],
  falsifiers: [
    "1. 中芯国际先进制程产能利用率跌破80%或资本开支指引下调>20% → 代工与设备链减半",
    "2. 北方华创/中微在手订单同比增速转负 → 设备环节清零重估",
    "3. 寒武纪/海光出货量连续两季低于指引 → AI芯片仓位清零",
    "4. 中际旭创1.6T订单指引下修或海外大客户砍单 → 光模块减半",
    "5. 澜起科技毛利率跌破55% → 接口芯片减半",
    "6. 腾讯/阿里云业务增速连续两季<10%且capex继续上行 → 云平台减半",
    "7. 存储毛利率升至历史80分位以上 → 存储链条止盈（周期顶部纪律）",
    "8. 智算中心上架率行业均值<50%的证据出现 → IDC清零",
    "9. 出口管制出现实质性放松（英伟达高端卡恢复对华销售）→ 全表国产替代逻辑重估",
    "10. 恒生科技/科创50跌破年线且北向连续8周流出 → 总敞口压至20%以下"
  ],
  dataNote: "v1.0 框架初版（2026-07-05）：环节结构、打分与规则已定；估值列、依据列读数待首个周更任务联网刷新，标「待刷新」处不构成判断依据。",
  disclaimer: "仅为个人研究参考，非投资建议。"
};
