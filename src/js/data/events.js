var HLM = window.HLM || {};

HLM.EventData = [

  { id:'evt_baoyu_01', name:'黛玉赠诗', character:'jbaoyu', probability:0.3,
    conditions:{'relationships.ldaiyu':{min:50}},
    text:'黛玉将一首新写的诗稿赠予你，纸上墨迹未干，字里行间透着淡淡的忧伤。她轻声道："不过是随手写的，你若觉得不好，便还了我。"',
    choices:[
      {text:'认真品读，真诚赞美',effects:{'relationships.ldaiyu':{add:5},'attributes.talent':{add:1}},flags:{evt_daiyu_poem:true}},
      {text:'小心收藏，日后细品',effects:{'relationships.ldaiyu':{add:3},'attributes.emotion':{add:1}},flags:{evt_daiyu_poem:true}},
      {text:'随口敷衍',effects:{'relationships.ldaiyu':{add:-3},'attributes.emotion':{add:-1}}}
    ]},

  { id:'evt_baoyu_02', name:'宝钗送药', character:'jbaoyu', probability:0.25,
    conditions:{'attributes.health':{max:5}},
    text:'宝钗见你面色不佳，送来一丸冷香丸，道："这药最是清热解毒，你且服一丸。"',
    choices:[
      {text:'感谢宝钗，服下药丸',effects:{'relationships.xbaochai':{add:5},'attributes.health':{add:2}},flags:{evt_baochai_medicine:true}},
      {text:'客气推辞',effects:{'relationships.xbaochai':{add:-2},'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_baoyu_03', name:'湘云烤鹿肉', character:'jbaoyu', probability:0.25,
    conditions:{},
    text:'湘云在芦雪亭中烤鹿肉，香气四溢。她招手道："快来快来！这鹿肉烤得正好！"',
    choices:[
      {text:'大快朵颐',effects:{'relationships.shi_xiangyun':{add:5},'attributes.health':{add:1}},flags:{evt_xiangyun_feast:true}},
      {text:'陪她一起烤',effects:{'relationships.shi_xiangyun':{add:4},'attributes.charm':{add:1}},flags:{evt_xiangyun_feast:true}},
      {text:'嫌粗俗，不去',effects:{'relationships.shi_xiangyun':{add:-5},'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_baoyu_04', name:'袭人劝学', character:'jbaoyu', probability:0.3,
    conditions:{},
    text:'袭人端来一碗参汤，温言道："你该用功读书了，老爷前日还问起你的功课呢。"',
    choices:[
      {text:'答应用功',effects:{'relationships.xiren':{add:3},'attributes.wisdom':{add:1}},flags:{evt_xiren_study:true}},
      {text:'说读书无趣',effects:{'relationships.xiren':{add:-3},'attributes.emotion':{add:2}}}
    ]},

  { id:'evt_baoyu_05', name:'晴雯补裘', character:'jbaoyu', probability:0.2,
    conditions:{'relationships.qingwen':{min:40}},
    text:'晴雯正在灯下补衣裳，手指灵巧如飞。她见你看着，笑道："看什么？没见过人做针线？"',
    choices:[
      {text:'夸赞她的手艺',effects:{'relationships.qingwen':{add:5},'attributes.charm':{add:1}},flags:{evt_qingwen_craft:true}},
      {text:'请求她教你',effects:{'relationships.qingwen':{add:3},'attributes.talent':{add:1}},flags:{evt_qingwen_craft:true}}
    ]},

  { id:'evt_baoyu_06', name:'探春论政', character:'jbaoyu', probability:0.2,
    conditions:{'attributes.wisdom':{min:5}},
    text:'探春正在翻看账本，见你来了，便道："这园中的开支实在太大，若不想法子开源节流，怕是撑不了多久。"',
    choices:[
      {text:'提出自己的建议',effects:{'relationships.tanchun':{add:5},'attributes.wisdom':{add:2}},flags:{evt_tanchun_reform:true}},
      {text:'表示支持但不出主意',effects:{'relationships.tanchun':{add:2}},flags:{evt_tanchun_reform:true}},
      {text:'说这些事与我无关',effects:{'relationships.tanchun':{add:-3},'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_baoyu_07', name:'黛玉葬花', character:'jbaoyu', probability:0.2,
    conditions:{'relationships.ldaiyu':{min:40}},
    text:'你看见黛玉独自在花冢旁葬花，肩担花锄，泪痕未干。她低吟着什么，声音如泣如诉。',
    choices:[
      {text:'上前安慰',effects:{'relationships.ldaiyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_daiyu_flower:true}},
      {text:'默默陪伴',effects:{'relationships.ldaiyu':{add:3},'attributes.emotion':{add:1}},flags:{evt_daiyu_flower:true}},
      {text:'远远看着，不敢打扰',effects:{'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_baoyu_08', name:'梦回太虚', character:'jbaoyu', probability:0.15,
    conditions:{'attributes.emotion':{min:7}},
    text:'你做了一个奇怪的梦——恍惚间来到一处仙境，警幻仙子对你说："痴儿，你可知这红尘中的情爱，不过是镜花水月？"你惊醒过来，额上冷汗涔涔。',
    choices:[
      {text:'若有所悟，记下梦境',effects:{'attributes.wisdom':{add:2},'attributes.talent':{add:1}},flags:{evt_taixu_dream:true}},
      {text:'心绪不宁，难以入眠',effects:{'attributes.emotion':{add:2},'attributes.health':{add:-1}}}
    ]},

  { id:'evt_baoyu_09', name:'妙玉烹茶', character:'jbaoyu', probability:0.15,
    conditions:{'attributes.talent':{min:6}},
    text:'妙玉在栊翠庵中烹茶，见你来了，淡淡道："既来了，便坐吧。"她以梅花雪水烹茶，茶香清冽。',
    choices:[
      {text:'品茶论道',effects:{'relationships.miaoyu':{add:5},'attributes.talent':{add:1}},flags:{evt_miaoyu_tea:true}},
      {text:'安静品茶',effects:{'relationships.miaoyu':{add:3}},flags:{evt_miaoyu_tea:true}}
    ]},

  { id:'evt_baoyu_10', name:'贾政考课', character:'jbaoyu', probability:0.25,
    conditions:{},
    text:'贾政突然来怡红院考校功课，面色严厉道："宝玉，八股文可曾习过？《四书》可曾读熟？"',
    choices:[
      {text:'硬着头皮应对',effects:{'attributes.wisdom':{add:2},'attributes.health':{add:-1}},flags:{evt_jiazheng_test:true}},
      {text:'装病逃避',effects:{'attributes.health':{add:-1},'attributes.emotion':{add:1}}},
      {text:'坦白说未曾用功',effects:{'attributes.wisdom':{add:1},'attributes.emotion':{add:-1}}}
    ]},

  { id:'evt_baoyu_11', name:'共读西厢', character:'jbaoyu', probability:0.2,
    conditions:{'relationships.ldaiyu':{min:60},'flags.evt_daiyu_poem':true},
    text:'你带着一本《西厢记》来到潇湘馆，黛玉见是禁书，先是嗔怪，继而好奇。两人并肩坐在窗前，你翻一页，她便读一段，读到"花落水流红，闲愁万种"时，黛玉红了脸。',
    choices:[
      {text:'借词表白心迹',effects:{'relationships.ldaiyu':{add:8},'attributes.emotion':{add:2},'attributes.charm':{add:1}},flags:{evt_xixiang_confess:true}},
      {text:'只是读书，不多言语',effects:{'relationships.ldaiyu':{add:3},'attributes.talent':{add:2}},flags:{evt_xixiang_read:true}}
    ]},

  { id:'evt_baoyu_12', name:'凤姐拉拢', character:'jbaoyu', probability:0.2,
    conditions:{'relationships.wangxifeng':{min:50}},
    text:'凤姐私下对你说："宝兄弟，你若能在老太太面前替我说几句好话，我自不会亏待你。"',
    choices:[
      {text:'答应帮忙',effects:{'relationships.wangxifeng':{add:5},'attributes.charm':{add:1}},flags:{evt_fengjie_ally:true}},
      {text:'婉言拒绝',effects:{'relationships.wangxifeng':{add:-2},'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_ldaiyu_01', name:'宝玉送旧帕', character:'ldaiyu', probability:0.3,
    conditions:{'relationships.jbaoyu':{min:50}},
    text:'宝玉差晴雯送来两块旧手帕，你一看便知其中深意——他是在用这旧帕告诉你，他心中只有你。你提笔在帕上写道："尺素如残雪，结为双鲤鱼。"',
    choices:[
      {text:'将题诗的手帕送回',effects:{'relationships.jbaoyu':{add:8},'attributes.emotion':{add:2}},flags:{evt_baoyu_handkerchief:true}},
      {text:'将手帕珍藏',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:1}},flags:{evt_baoyu_handkerchief:true}}
    ]},

  { id:'evt_ldaiyu_02', name:'宝钗来访', character:'ldaiyu', probability:0.25,
    conditions:{},
    text:'宝钗来看你，带了一篮子新鲜荔枝。她温声道："林妹妹，这荔枝是刚从南方运来的，你尝尝。"',
    choices:[
      {text:'欣然接受，以礼相待',effects:{'relationships.xbaochai':{add:4},'attributes.health':{add:1}},flags:{evt_baochai_visit:true}},
      {text:'客气推辞',effects:{'relationships.xbaochai':{add:-2},'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_ldaiyu_03', name:'紫鹃试心', character:'ldaiyu', probability:0.25,
    conditions:{'relationships.jbaoyu':{min:60}},
    text:'紫鹃私下对你说："姑娘，你与宝二爷的事，总该有个说法。若老太太不提，姑娘何不自己……"她话未说完，你已红了脸。',
    choices:[
      {text:'认真考虑紫鹃的话',effects:{'attributes.wisdom':{add:2}},flags:{evt_zijuan_advice:true}},
      {text:'嗔怪紫鹃多事',effects:{'attributes.emotion':{add:2},'attributes.health':{add:-1}}}
    ]},

  { id:'evt_ldaiyu_04', name:'湘云联诗', character:'ldaiyu', probability:0.2,
    conditions:{},
    text:'湘云来找你联诗，她笑道："林姐姐，咱们对菊联诗如何？我今日灵感来了！"她的才思果然敏捷，你也不甘示弱。',
    choices:[
      {text:'全力以赴',effects:{'relationships.shi_xiangyun':{add:4},'attributes.talent':{add:2}},flags:{evt_xiangyun_poetry:true}},
      {text:'随意应对',effects:{'relationships.shi_xiangyun':{add:2},'attributes.talent':{add:1}}}
    ]},

  { id:'evt_ldaiyu_05', name:'夜雨思乡', character:'ldaiyu', probability:0.2,
    conditions:{},
    text:'秋雨淅沥，你独坐窗前，想起远在扬州的父亲。紫鹃端来热茶，轻声道："姑娘又想家了？"',
    choices:[
      {text:'以诗寄情',effects:{'attributes.talent':{add:2},'attributes.emotion':{add:2}},flags:{evt_homesick_poem:true}},
      {text:'强忍泪水',effects:{'attributes.health':{add:-1},'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_ldaiyu_06', name:'探春邀社', character:'ldaiyu', probability:0.2,
    conditions:{},
    text:'探春发帖邀你加入诗社，她道："林姐姐诗才第一，若不参加，我们这诗社可就名存实亡了。"',
    choices:[
      {text:'欣然加入',effects:{'relationships.tanchun':{add:4},'attributes.talent':{add:1}},flags:{evt_poetry_club:true}},
      {text:'推辞说身体不适',effects:{'attributes.health':{add:1}}}
    ]},

  { id:'evt_ldaiyu_07', name:'妙玉品茶', character:'ldaiyu', probability:0.15,
    conditions:{'attributes.talent':{min:6}},
    text:'妙玉请你去栊翠庵品茶，她以梅花雪水烹茶，道："这水是我五年前收的梅花上的雪，今日才开坛。"',
    choices:[
      {text:'细细品味',effects:{'relationships.miaoyu':{add:5},'attributes.talent':{add:1}},flags:{evt_miaoyu_tea:true}},
      {text:'赞叹其雅致',effects:{'relationships.miaoyu':{add:3}},flags:{evt_miaoyu_tea:true}}
    ]},

  { id:'evt_ldaiyu_08', name:'金玉之说', character:'ldaiyu', probability:0.2,
    conditions:{'relationships.jbaoyu':{min:50}},
    text:'你在园中散步时，听见两个婆子在角落里嘀咕："宝二爷和宝姑娘才是金玉良缘，那林姑娘不过是个寄居的……"你如遭雷击，手中的丝帕落在地上。',
    choices:[
      {text:'强忍悲痛，转身离去',effects:{'attributes.emotion':{add:3},'attributes.health':{add:-2}}},
      {text:'上前质问',effects:{'attributes.charm':{add:2},'attributes.emotion':{add:1}},flags:{evt_confront_rumor:true}},
      {text:'回潇湘馆暗自垂泪',effects:{'attributes.emotion':{add:2},'attributes.health':{add:-1}}}
    ]},

  { id:'evt_ldaiyu_09', name:'宝玉摔玉', character:'ldaiyu', probability:0.2,
    conditions:{'relationships.jbaoyu':{min:70}},
    text:'宝玉又因你与旁人争执，一怒之下摘下通灵宝玉狠命摔去，骂道："什么稀罕物！我也不要了！"满屋人惊慌失措，你心中又惊又悔。',
    choices:[
      {text:'含泪劝他',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_stop_jade_throw:true}},
      {text:'自责不已',effects:{'attributes.health':{add:-2},'attributes.emotion':{add:3}}}
    ]},

  { id:'evt_ldaiyu_10', name:'葬花遇知音', character:'ldaiyu', probability:0.15,
    conditions:{'flags.evt_homesick_poem':true},
    text:'你又在花冢旁葬花，低吟《葬花吟》。忽然身后传来一声叹息——竟是宝玉。他泪流满面道："林妹妹，你何苦如此？"',
    choices:[
      {text:'与他倾诉心中苦闷',effects:{'relationships.jbaoyu':{add:8},'attributes.emotion':{add:2}},flags:{evt_daiyu_confide:true}},
      {text:'含羞而去',effects:{'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_ldaiyu_11', name:'贾母关怀', character:'ldaiyu', probability:0.25,
    conditions:{'relationships.jiamu':{min:50}},
    text:'贾母差人来问你的病情，还送来一盒燕窝。鸳鸯传话说："老太太说了，让姑娘好生养着，什么都别多想。"',
    choices:[
      {text:'感动落泪',effects:{'relationships.jiamu':{add:5},'attributes.emotion':{add:2}},flags:{evt_jiamu_care:true}},
      {text:'写谢恩信',effects:{'relationships.jiamu':{add:4},'attributes.talent':{add:1}},flags:{evt_jiamu_care:true}}
    ]},

  { id:'evt_xbaochai_01', name:'宝玉看锁', character:'xbaochai', probability:0.3,
    conditions:{'relationships.jbaoyu':{min:40}},
    text:'宝玉注意到你颈上的金锁，凑近细看，念道："不离不弃，芳龄永继。"他笑道："姐姐这八个字，倒和我玉上的字是一对儿。"',
    choices:[
      {text:'含笑不语',effects:{'relationships.jbaoyu':{add:5},'attributes.charm':{add:1}},flags:{evt_jade_lock:true}},
      {text:'转移话题',effects:{'attributes.wisdom':{add:1}}},
      {text:'心中暗喜',effects:{'attributes.emotion':{add:2}},flags:{evt_jade_lock:true}}
    ]},

  { id:'evt_xbaochai_02', name:'黛玉求教', character:'xbaochai', probability:0.25,
    conditions:{'relationships.ldaiyu':{min:40}},
    text:'黛玉来找你请教诗词，她虽嘴上说"不过是闲来无事"，但你看得出来她是在真心求教。',
    choices:[
      {text:'耐心指导',effects:{'relationships.ldaiyu':{add:5},'attributes.talent':{add:1}},flags:{evt_daiyu_teach:true}},
      {text:'谦虚推辞',effects:{'relationships.ldaiyu':{add:2}}}
    ]},

  { id:'evt_xbaochai_03', name:'薛姨妈来信', character:'xbaochai', probability:0.25,
    conditions:{},
    text:'母亲来信，言辞间暗示金玉良缘之事。她写道："女儿当为薛家着想，不可任性。"',
    choices:[
      {text:'遵从母命',effects:{'attributes.wisdom':{add:1}},flags:{evt_mother_will:true}},
      {text:'心中暗自思量',effects:{'attributes.emotion':{add:2}},flags:{evt_mother_doubt:true}},
      {text:'回信婉拒',effects:{'attributes.emotion':{add:3},'attributes.wisdom':{add:-1}}}
    ]},

  { id:'evt_xbaochai_04', name:'探春论画', character:'xbaochai', probability:0.2,
    conditions:{},
    text:'探春来找你论画，她道："宝姐姐博学多才，这大观园的图，非你莫属来评。"',
    choices:[
      {text:'认真品评',effects:{'relationships.tanchun':{add:4},'attributes.talent':{add:2}},flags:{evt_tanchun_art:true}},
      {text:'谦虚推让',effects:{'relationships.tanchun':{add:2}}}
    ]},

  { id:'evt_xbaochai_05', name:'凤姐试探', character:'xbaochai', probability:0.2,
    conditions:{'relationships.wangxifeng':{min:40}},
    text:'凤姐私下对你说："宝妹妹，你与宝兄弟的事，太太可是放在心上的。你心里可有个准主意？"',
    choices:[
      {text:'含蓄回应',effects:{'relationships.wangxifeng':{add:3},'attributes.wisdom':{add:2}},flags:{evt_fengjie_probe:true}},
      {text:'不置可否',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_xbaochai_06', name:'冷香丸', character:'xbaochai', probability:0.15,
    conditions:{},
    text:'你取出冷香丸服下。那股凉意从喉间蔓延到四肢百骸，将心中翻涌的热意压了下去。莺儿道："姑娘，这药可还够用？"',
    choices:[
      {text:'说够用',effects:{'attributes.wisdom':{add:1}}},
      {text:'问莺儿对将来的看法',effects:{'attributes.emotion':{add:1},'attributes.wisdom':{add:1}},flags:{evt_yinger_chat:true}}
    ]},

  { id:'evt_xbaochai_07', name:'金锁之秘', character:'xbaochai', probability:0.15,
    conditions:{'flags.evt_jade_lock':true},
    text:'你独坐蘅芜苑中，手指摩挲着金锁上的字——"不离不弃，芳龄永继"。癞头和尚的话又在耳边响起："这金锁需配玉方可化解。"你心中暗想：这究竟是福是祸？',
    choices:[
      {text:'接受命运的安排',effects:{'attributes.wisdom':{add:2}},flags:{evt_accept_fate:true}},
      {text:'不甘心被命运束缚',effects:{'attributes.emotion':{add:3},'attributes.wisdom':{add:-1}},flags:{evt_reject_fate:true}}
    ]},

  { id:'evt_xbaochai_08', name:'黛玉交心', character:'xbaochai', probability:0.15,
    conditions:{'relationships.ldaiyu':{min:55},'flags.evt_daiyu_teach':true},
    text:'黛玉又来你处，这次不是为了求教，而是红着眼眶道："宝姐姐，我有一事想问你……你当真对宝玉无意吗？"她的目光如水，让你一时不知如何作答。',
    choices:[
      {text:'坦诚告知自己的矛盾',effects:{'relationships.ldaiyu':{add:8},'attributes.emotion':{add:2}},flags:{evt_daiyu_honest:true}},
      {text:'含糊其辞',effects:{'relationships.ldaiyu':{add:-2},'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_xbaochai_09', name:'莺儿打络子', character:'xbaochai', probability:0.2,
    conditions:{},
    text:'莺儿一边打络子一边道："姑娘，我听人说，宝二爷那块玉上的字和姑娘金锁上的字正是一对儿呢。"她偷眼看你，嘴角含笑。',
    choices:[
      {text:'训斥莺儿胡说',effects:{'attributes.wisdom':{add:1},'attributes.emotion':{add:-1}}},
      {text:'默然不语',effects:{'attributes.emotion':{add:1}},flags:{evt_yinger_match:true}},
      {text:'心中暗喜',effects:{'attributes.emotion':{add:2}},flags:{evt_yinger_match:true}}
    ]},

  { id:'evt_xbaochai_10', name:'帮探春理家', character:'xbaochai', probability:0.2,
    conditions:{'relationships.tanchun':{min:50},'flags.evt_tanchun_art':true},
    text:'探春请你帮忙理家，她道："宝姐姐见识广博，这改革之事，非你帮忙不可。"',
    choices:[
      {text:'全力相助',effects:{'relationships.tanchun':{add:5},'attributes.wisdom':{add:2}},flags:{evt_help_tanchun:true}},
      {text:'出谋划策但不出面',effects:{'relationships.tanchun':{add:3},'attributes.wisdom':{add:1}},flags:{evt_help_tanchun:true}}
    ]},

  { id:'evt_shi_xiangyun_01', name:'宝玉说笑', character:'shi_xiangyun', probability:0.3,
    conditions:{'relationships.jbaoyu':{min:40}},
    text:'宝玉见你来，笑道："云妹妹来了！快来讲讲你在史家的趣事。"他最爱听你说话，尤其是你咬舌把"二"说成"爱"的时候。',
    choices:[
      {text:'大方说笑',effects:{'relationships.jbaoyu':{add:5},'attributes.charm':{add:1}},flags:{evt_baoyu_laugh:true}},
      {text:'故意逗他',effects:{'relationships.jbaoyu':{add:4},'attributes.charm':{add:2}}}
    ]},

  { id:'evt_shi_xiangyun_02', name:'黛玉论诗', character:'shi_xiangyun', probability:0.25,
    conditions:{},
    text:'黛玉与你论诗，她道："湘云，你诗才虽好，却太过豪放，少了些含蓄之美。"你不服道："是真名士自风流！"',
    choices:[
      {text:'坚持己见',effects:{'attributes.talent':{add:2},'attributes.charm':{add:1}},flags:{evt_poetry_debate:true}},
      {text:'虚心接受',effects:{'relationships.ldaiyu':{add:3},'attributes.talent':{add:1}}}
    ]},

  { id:'evt_shi_xiangyun_03', name:'史家来人', character:'shi_xiangyun', probability:0.2,
    conditions:{},
    text:'史家派人来接你回去。来人面带难色道："姑奶奶说，姑娘该回去了。"',
    choices:[
      {text:'请求多留几日',effects:{'attributes.emotion':{add:2}},flags:{evt_stay_request:true}},
      {text:'默默收拾行装',effects:{'attributes.wisdom':{add:1},'attributes.emotion':{add:-2}}}
    ]},

  { id:'evt_shi_xiangyun_04', name:'芍药醉眠', character:'shi_xiangyun', probability:0.15,
    conditions:{},
    text:'你在芍药花丛中多喝了几杯，不知不觉醉了。醒来时发现自己躺在青石上，满身落花。众人围在身旁，又是心疼又是好笑。',
    choices:[
      {text:'大方承认',effects:{'attributes.charm':{add:2}},flags:{evt_peony_sleep:true}},
      {text:'不好意思地笑了',effects:{'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_shi_xiangyun_05', name:'翠缕论阴阳', character:'shi_xiangyun', probability:0.2,
    conditions:{'attributes.wisdom':{min:5}},
    text:'丫鬟翠缕问你："姑娘，这世间万物都分阴阳吗？"你想了想，指着园中的花木道："自然是——这枝为阳，那叶为阴；天为阳，地为阴。"',
    choices:[
      {text:'深入阐述阴阳之理',effects:{'attributes.wisdom':{add:2},'attributes.talent':{add:1}},flags:{evt_yinyang_theory:true}},
      {text:'笑着说去问宝姐姐',effects:{'relationships.xbaochai':{add:2}}}
    ]},

  { id:'evt_shi_xiangyun_06', name:'诗社夺魁', character:'shi_xiangyun', probability:0.2,
    conditions:{'attributes.talent':{min:7},'flags.evt_poetry_debate':true},
    text:'今日诗社以柳絮为题，你一挥而就："也宜墙角也宜盆，花因喜洁难寻偶。"众人皆叹你才思敏捷，连黛玉也赞道："湘云这首倒别致。"',
    choices:[
      {text:'谦虚接受赞美',effects:{'relationships.ldaiyu':{add:3},'attributes.charm':{add:1}},flags:{evt_poetry_win:true}},
      {text:'得意忘形',effects:{'attributes.charm':{add:2},'relationships.ldaiyu':{add:-2}}}
    ]},

  { id:'evt_shi_xiangyun_07', name:'宝钗关怀', character:'shi_xiangyun', probability:0.2,
    conditions:{'relationships.xbaochai':{min:50}},
    text:'宝钗见你衣裳单薄，送来一件新做的斗篷，道："云妹妹，你虽不拘小节，也该顾着身体。"',
    choices:[
      {text:'感激接受',effects:{'relationships.xbaochai':{add:4},'attributes.emotion':{add:1}},flags:{evt_baochai_care:true}},
      {text:'笑着说不用',effects:{'attributes.charm':{add:1}}}
    ]},

  { id:'evt_shi_xiangyun_08', name:'夜谈身世', character:'shi_xiangyun', probability:0.15,
    conditions:{'flags.evt_stay_request':true},
    text:'深夜，你独自坐在窗前，想起在史家受的委屈。叔婶虽是至亲，却从不把你当自家人。你咬着嘴唇，不让眼泪落下来。',
    choices:[
      {text:'以诗抒怀',effects:{'attributes.talent':{add:2},'attributes.emotion':{add:2}},flags:{evt_night_poem:true}},
      {text:'暗下决心要自立',effects:{'attributes.wisdom':{add:3}},flags:{evt_resolve_independent:true}}
    ]},

  { id:'evt_jiamu_01', name:'宝玉请安', character:'jiamu', probability:0.3,
    conditions:{},
    text:'宝玉来给你请安，他笑着扑进你怀里道："老祖宗，我想你了！"你摸着他的头，心中暖意融融。',
    choices:[
      {text:'疼爱地搂着他',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_baoyu_filial:true}},
      {text:'叮嘱他读书',effects:{'relationships.jbaoyu':{add:2},'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_jiamu_02', name:'王夫人进言', character:'jiamu', probability:0.25,
    conditions:{},
    text:'王夫人来向你进言，道："老太太，宝玉的婚事该定下来了。薛家姑娘稳重贤惠，与宝玉正是良配。"',
    choices:[
      {text:'沉吟不语',effects:{'attributes.wisdom':{add:2}},flags:{evt_wangfuren_proposal:true}},
      {text:'说再等等',effects:{'attributes.wisdom':{add:1}}},
      {text:'明确表示倾向黛玉',effects:{'relationships.ldaiyu':{add:5},'attributes.emotion':{add:1}},flags:{evt_favor_daiyu:true}}
    ]},

  { id:'evt_jiamu_03', name:'黛玉撒娇', character:'jiamu', probability:0.25,
    conditions:{'relationships.ldaiyu':{min:50}},
    text:'黛玉来给你请安，她靠在你身边，轻声道："外祖母，我昨夜又咳嗽了……"你心疼地搂着她，暗暗叹息。',
    choices:[
      {text:'吩咐准备上好燕窝',effects:{'relationships.ldaiyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_daiyu_care:true}},
      {text:'请大夫来诊脉',effects:{'relationships.ldaiyu':{add:3},'attributes.wisdom':{add:1}},flags:{evt_daiyu_care:true}}
    ]},

  { id:'evt_jiamu_04', name:'凤姐报账', character:'jiamu', probability:0.2,
    conditions:{},
    text:'凤姐拿着账本来报账，她笑嘻嘻道："老祖宗，这个月的开支……"你翻看账本，发现数目比上月又多了不少。',
    choices:[
      {text:'严令节俭',effects:{'attributes.wisdom':{add:2}},flags:{evt_order_thrift:true}},
      {text:'由她去，不伤和气',effects:{'relationships.wangxifeng':{add:3},'attributes.wisdom':{add:-1}}}
    ]},

  { id:'evt_jiamu_05', name:'贾政请安', character:'jiamu', probability:0.2,
    conditions:{},
    text:'贾政来给你请安，面色凝重道："母亲，宝玉整日在内帷厮混，不思进取，长此以往如何得了？"',
    choices:[
      {text:'替宝玉说话',effects:{'relationships.jbaoyu':{add:3},'attributes.emotion':{add:1}},flags:{evt_protect_baoyu:true}},
      {text:'同意贾政的看法',effects:{'attributes.wisdom':{add:1},'relationships.jbaoyu':{add:-2}}}
    ]},

  { id:'evt_jiamu_06', name:'家族危机', character:'jiamu', probability:0.15,
    conditions:{'attributes.wisdom':{min:7}},
    text:'你从几件小事中察觉到了不祥之兆——下人开始偷懒，账目越来越混乱，几个管事的也开始中饱私囊。你心中暗惊：贾府的根基，正在一点点被蛀空。',
    choices:[
      {text:'召集全家训话',effects:{'attributes.wisdom':{add:2}},flags:{evt_family_warning:true}},
      {text:'暗中调查',effects:{'attributes.wisdom':{add:3}},flags:{evt_secret_investigate:true}},
      {text:'叹气作罢',effects:{'attributes.emotion':{add:2},'attributes.wisdom':{add:-1}}}
    ]},

  { id:'evt_jiamu_07', name:'黛玉病重', character:'jiamu', probability:0.15,
    conditions:{'flags.evt_daiyu_care':true},
    text:'紫鹃来报，说黛玉病势加重，终日咳嗽不止。你心中大痛——这孩子与她母亲当年何其相似！你暗暗下定决心，一定要为黛玉安排好一切。',
    choices:[
      {text:'亲自去看黛玉',effects:{'relationships.ldaiyu':{add:8},'attributes.emotion':{add:3}},flags:{evt_daiyu_serious:true}},
      {text:'请太医诊治',effects:{'relationships.ldaiyu':{add:3},'attributes.wisdom':{add:1}},flags:{evt_daiyu_serious:true}}
    ]},

  { id:'evt_tanchun_01', name:'赵姨娘闹事', character:'tanchun', probability:0.3,
    conditions:{},
    text:'赵姨娘又来秋爽斋闹事，骂你不认亲娘。你攥紧了拳头，强忍怒意。她道："你如今管了家，便不把我放在眼里了！"',
    choices:[
      {text:'据理力争',effects:{'attributes.wisdom':{add:2},'attributes.emotion':{add:1}},flags:{evt_zhaoyiniang_fight:true}},
      {text:'冷静处理',effects:{'attributes.wisdom':{add:3}},flags:{evt_zhaoyiniang_calm:true}}
    ]},

  { id:'evt_tanchun_02', name:'宝钗助阵', character:'tanchun', probability:0.25,
    conditions:{'relationships.xbaochai':{min:40}},
    text:'宝钗来帮你理家，她翻看账本道："三妹妹的改革方向是对的，只是步子可以再大些。"',
    choices:[
      {text:'采纳建议',effects:{'relationships.xbaochai':{add:4},'attributes.wisdom':{add:2}},flags:{evt_baochai_reform:true}},
      {text:'谨慎推进',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_tanchun_03', name:'宝玉送花', character:'tanchun', probability:0.2,
    conditions:{'relationships.jbaoyu':{min:40}},
    text:'宝玉送来一盆秋菊，笑道："三姐姐，这花开得正盛，放在秋爽斋最是相宜。"',
    choices:[
      {text:'欣然收下',effects:{'relationships.jbaoyu':{add:3},'attributes.emotion':{add:1}}},
      {text:'邀他下棋',effects:{'relationships.jbaoyu':{add:4},'attributes.wisdom':{add:1}},flags:{evt_baoyu_chess:true}}
    ]},

  { id:'evt_tanchun_04', name:'兴利除弊', character:'tanchun', probability:0.2,
    conditions:{'attributes.wisdom':{min:6}},
    text:'你将大观园中的田地花木承包给专人管理，每年可省下四百两银子。众人都叹你精明，但也有人在背后说你"越俎代庖"。',
    choices:[
      {text:'坚持改革不动摇',effects:{'attributes.wisdom':{add:3},'attributes.emotion':{add:1}},flags:{evt_reform_persist:true}},
      {text:'适当妥协以安抚人心',effects:{'attributes.wisdom':{add:2},'attributes.charm':{add:1}},flags:{evt_reform_compromise:true}}
    ]},

  { id:'evt_tanchun_05', name:'远嫁消息', character:'tanchun', probability:0.15,
    conditions:{'attributes.wisdom':{min:7}},
    text:'你从贾琏口中得知，南安太妃要在贾家选一位小姐和亲远嫁。你心中一沉——以你庶出的身份，恐怕首当其冲。',
    choices:[
      {text:'暗中筹谋应对之策',effects:{'attributes.wisdom':{add:3}},flags:{evt_plan_escape:true}},
      {text:'坦然面对',effects:{'attributes.emotion':{add:2},'attributes.wisdom':{add:1}},flags:{evt_accept_fate_tanchun:true}}
    ]},

  { id:'evt_tanchun_06', name:'与宝玉论志', character:'tanchun', probability:0.2,
    conditions:{'flags.evt_baoyu_chess':true},
    text:'下棋间隙，宝玉问你："三姐姐，你若是个男人，最想做什么？"你目光坚定道："我若是个男人，早已出去立一番事业了！"',
    choices:[
      {text:'畅谈抱负',effects:{'relationships.jbaoyu':{add:5},'attributes.wisdom':{add:2}},flags:{evt_discuss_ambition:true}},
      {text:'叹息身为女子的无奈',effects:{'attributes.emotion':{add:2}}}
    ]},

  { id:'evt_wangxifeng_01', name:'贾琏偷娶', character:'wangxifeng', probability:0.3,
    conditions:{},
    text:'你得知贾琏在外偷娶了尤二姐。平儿小心翼翼地告诉你这个消息，你的脸色瞬间铁青。',
    choices:[
      {text:'暗中筹谋',effects:{'attributes.wisdom':{add:2}},flags:{evt_jealousy_scheme:true}},
      {text:'强压怒火',effects:{'attributes.emotion':{add:2},'attributes.health':{add:-1}}}
    ]},

  { id:'evt_wangxifeng_02', name:'探春求助', character:'wangxifeng', probability:0.25,
    conditions:{'relationships.tanchun':{min:40}},
    text:'探春来找你商议家务，她道："凤姐姐身体不好，有些事我可以帮忙料理。"',
    choices:[
      {text:'欣然同意',effects:{'relationships.tanchun':{add:5},'attributes.wisdom':{add:1}},flags:{evt_delegate_tanchun:true}},
      {text:'勉强应允',effects:{'relationships.tanchun':{add:2}}}
    ]},

  { id:'evt_wangxifeng_03', name:'秦可卿托梦', character:'wangxifeng', probability:0.15,
    conditions:{},
    text:'你做了一个梦，梦中秦可卿来劝你："凤辣子，趁现在还有时间，给贾府留条后路吧。多置祭田，少放印子钱。"',
    choices:[
      {text:'醒来后认真考虑',effects:{'attributes.wisdom':{add:3}},flags:{evt_qinkeqing_dream:true}},
      {text:'不过是个梦',effects:{'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_wangxifeng_04', name:'放债取利', character:'wangxifeng', probability:0.2,
    conditions:{},
    text:'来旺媳妇来报，说这个月的印子钱收了三百两。你心中暗喜，却又隐隐不安——这笔钱来路不正，若被人知道了……',
    choices:[
      {text:'继续放债',effects:{'attributes.fortune':{add:3},'attributes.wisdom':{add:-2}},flags:{evt_usury_continue:true}},
      {text:'收手不干',effects:{'attributes.fortune':{add:-2},'attributes.wisdom':{add:2}},flags:{evt_usury_stop:true}}
    ]},

  { id:'evt_wangxifeng_05', name:'平儿忠言', character:'wangxifeng', probability:0.2,
    conditions:{'attributes.emotion':{min:5}},
    text:'平儿私下劝你："奶奶，尤二姐的事……何必做得那么绝？人命关天，还望奶奶三思。"',
    choices:[
      {text:'听进去了',effects:{'attributes.wisdom':{add:2},'attributes.emotion':{add:1}},flags:{evt_ping_er_advice:true}},
      {text:'不以为然',effects:{'attributes.wisdom':{add:-1},'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_wangxifeng_06', name:'抄家前兆', character:'wangxifeng', probability:0.15,
    conditions:{'flags.evt_qinkeqing_dream':true,'attributes.wisdom':{min:7}},
    text:'你忽然想起秦可卿梦中的话，又见近日朝廷风向有变，心中隐隐不安。你翻出私藏的账本，发现其中漏洞百出——若有人来查，你必死无疑。',
    choices:[
      {text:'赶紧销毁证据',effects:{'attributes.wisdom':{add:2}},flags:{evt_destroy_evidence:true}},
      {text:'将功补过',effects:{'attributes.wisdom':{add:3},'attributes.fortune':{add:-3}},flags:{evt_redeem_wxf:true}}
    ]},

  { id:'evt_liwan_01', name:'贾兰读书', character:'liwan', probability:0.3,
    conditions:{},
    text:'贾兰今日读书格外用功，他将一篇《孟子》背得滚瓜烂熟。你看着他认真的模样，心中既欣慰又心酸。',
    choices:[
      {text:'奖励他一块糕点',effects:{'attributes.emotion':{add:2}},flags:{evt_jialan_study:true}},
      {text:'继续督促',effects:{'attributes.wisdom':{add:1}},flags:{evt_jialan_study:true}}
    ]},

  { id:'evt_liwan_02', name:'探春邀社', character:'liwan', probability:0.25,
    conditions:{},
    text:'探春来邀你担任诗社社长，她道："嫂子最是公正，品评诗作非你莫属。"',
    choices:[
      {text:'答应担任',effects:{'relationships.tanchun':{add:4},'attributes.talent':{add:1}},flags:{evt_poetry_club:true}},
      {text:'谦虚推辞',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_liwan_03', name:'稻香村闲居', character:'liwan', probability:0.2,
    conditions:{},
    text:'你独坐稻香村中，青篱土井，茅屋数楹。窗外竹影摇曳，你想起亡夫贾珠，心中一阵酸楚。贾兰的笑声从屋外传来，你擦了擦眼角，露出微笑。',
    choices:[
      {text:'继续教子读书',effects:{'attributes.wisdom':{add:1}},flags:{evt_focus_son:true}},
      {text:'去园中走走散心',effects:{'attributes.emotion':{add:2},'attributes.health':{add:1}},flags:{evt_walk_garden:true}}
    ]},

  { id:'evt_liwan_04', name:'诗社评诗', character:'liwan', probability:0.2,
    conditions:{'flags.evt_poetry_club':true},
    text:'诗社中，众人各展才情。你逐一品评，公正有据。黛玉的诗风流别致，宝钗的诗含蓄浑厚，你评宝钗第一、黛玉第二。黛玉虽有些不服，却也知你评得公允。',
    choices:[
      {text:'私下安慰黛玉',effects:{'relationships.ldaiyu':{add:3},'attributes.emotion':{add:1}}},
      {text:'坚持己见',effects:{'attributes.wisdom':{add:2}},flags:{evt_firm_judge:true}}
    ]},

  { id:'evt_liwan_05', name:'贾兰中举', character:'liwan', probability:0.15,
    conditions:{'flags.evt_jialan_study':true,'attributes.wisdom':{min:7}},
    text:'捷报传来——贾兰中了秀才！你喜极而泣，多年的辛苦终于有了回报。贾兰跪在你面前道："母亲，孩儿一定不负您的期望。"',
    choices:[
      {text:'含泪点头',effects:{'attributes.emotion':{add:3},'attributes.fortune':{add:2}},flags:{evt_jialan_success:true}},
      {text:'告诫他不可骄傲',effects:{'attributes.wisdom':{add:2}},flags:{evt_jialan_success:true}}
    ]},

  { id:'evt_liwan_06', name:'姐妹闲话', character:'liwan', probability:0.2,
    conditions:{'flags.evt_walk_garden':true},
    text:'你在园中散步时遇到探春和宝钗，三人坐在亭中闲话。探春道："嫂子整日守在稻香村，何不常出来走走？"宝钗也道："李嫂子才学不凡，不该埋没了。"',
    choices:[
      {text:'答应以后常来',effects:{'relationships.tanchun':{add:3},'relationships.xbaochai':{add:3},'attributes.emotion':{add:2}},flags:{evt_socialize:true}},
      {text:'婉言谢绝',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_miaoyu_01', name:'宝玉来访', character:'miaoyu', probability:0.3,
    conditions:{'relationships.jbaoyu':{min:40}},
    text:'宝玉来到栊翠庵，他站在梅花树下，望着庵门出神。你从窗中看到他的身影，心中泛起一丝涟漪。',
    choices:[
      {text:'请他进来品茶',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_baoyu_tea:true}},
      {text:'装作没看见',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_miaoyu_02', name:'黛玉论禅', character:'miaoyu', probability:0.25,
    conditions:{'relationships.ldaiyu':{min:40}},
    text:'黛玉来栊翠庵与你论禅，她道："妙玉师父，你说这世间情为何物？"你一时语塞，心中暗惊——她问的何止是禅？',
    choices:[
      {text:'以禅语答之',effects:{'relationships.ldaiyu':{add:3},'attributes.wisdom':{add:2}}},
      {text:'沉默不语',effects:{'attributes.emotion':{add:2}},flags:{evt_daiyu_zen:true}}
    ]},

  { id:'evt_miaoyu_03', name:'梅花雪水', character:'miaoyu', probability:0.2,
    conditions:{},
    text:'清晨，你在栊翠庵后院收取梅花上的雪水。那雪水清冽甘甜，用来烹茶最是上品。你小心翼翼地将雪水收入鬼脸青花瓮中。',
    choices:[
      {text:'独自品茶',effects:{'attributes.wisdom':{add:2},'attributes.talent':{add:1}},flags:{evt_snow_water:true}},
      {text:'留待有缘人来共品',effects:{'attributes.emotion':{add:1}},flags:{evt_snow_water:true}}
    ]},

  { id:'evt_miaoyu_04', name:'刘姥姥用杯', character:'miaoyu', probability:0.2,
    conditions:{},
    text:'贾母带刘姥姥来栊翠庵品茶。那刘姥姥用了你的成窑杯，你嫌她脏，要掷出去。道婆劝道："姑娘，那杯子值不少银子呢。"',
    choices:[
      {text:'坚持掷掉',effects:{'attributes.emotion':{add:1},'attributes.fortune':{add:-2}}},
      {text:'忍痛送给刘姥姥',effects:{'attributes.wisdom':{add:2},'attributes.emotion':{add:-1}},flags:{evt_give_cup:true}}
    ]},

  { id:'evt_miaoyu_05', name:'宝玉拜帖', character:'miaoyu', probability:0.15,
    conditions:{'flags.evt_baoyu_tea':true},
    text:'宝玉生日那天，你写了一张拜帖，署名"槛外人妙玉恭肃遥叩芳辰"。你将帖子交给婆子送去，心中却忐忑不安——这算不算逾矩了？',
    choices:[
      {text:'不管了，心意已到',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_birthday_card:true}},
      {text:'后悔写了，想追回来',effects:{'attributes.emotion':{add:1}}}
    ]},

  { id:'evt_miaoyu_06', name:'夜半钟声', character:'miaoyu', probability:0.15,
    conditions:{'attributes.wisdom':{min:7}},
    text:'夜深人静，你在栊翠庵中打坐。忽然听到远处的钟声，悠远绵长。你心中一动——这钟声是从哪里来的？是寺院的晨钟，还是心中的幻听？',
    choices:[
      {text:'继续打坐，以定力驱散杂念',effects:{'attributes.wisdom':{add:3}},flags:{evt_zen_mastery:true}},
      {text:'起身推窗，望向钟声来处',effects:{'attributes.emotion':{add:2},'attributes.talent':{add:1}},flags:{evt_window_open:true}}
    ]},

  { id:'evt_qingwen_01', name:'宝玉送扇', character:'qingwen', probability:0.3,
    conditions:{'relationships.jbaoyu':{min:40}},
    text:'宝玉递给你一把扇子，你心情不好，竟接过去嗤嗤撕成两半。宝玉非但不恼，反而拍手笑道："撕得好！"',
    choices:[
      {text:'再撕一把',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:2}},flags:{evt_fan_tear:true}},
      {text:'笑了出来',effects:{'relationships.jbaoyu':{add:3},'attributes.charm':{add:1}}}
    ]},

  { id:'evt_qingwen_02', name:'袭人规劝', character:'qingwen', probability:0.25,
    conditions:{},
    text:'袭人私下对你说："晴雯，你性子太刚，这样下去迟早要吃亏的。"',
    choices:[
      {text:'不以为然',effects:{'attributes.emotion':{add:1}},flags:{evt_refuse_advice:true}},
      {text:'嘴硬但心里记下了',effects:{'attributes.wisdom':{add:2}},flags:{evt_accept_advice:true}}
    ]},

  { id:'evt_qingwen_03', name:'病补雀金裘', character:'qingwen', probability:0.2,
    conditions:{'attributes.talent':{min:6}},
    text:'宝玉的雀金裘烧了一个洞，满城裁缝都补不了。你虽病中，仍咬牙拿针，用界线之法补得天衣无缝。宝玉心疼道："你何苦来？"',
    choices:[
      {text:'笑着说补好了便安心',effects:{'relationships.jbaoyu':{add:8},'attributes.talent':{add:2},'attributes.health':{add:-2}},flags:{evt_mend_cloak:true}},
      {text:'嘴硬说不费事',effects:{'relationships.jbaoyu':{add:5},'attributes.charm':{add:1},'attributes.health':{add:-1}},flags:{evt_mend_cloak:true}}
    ]},

  { id:'evt_qingwen_04', name:'王夫人召见', character:'qingwen', probability:0.2,
    conditions:{'flags.evt_refuse_advice':true},
    text:'王夫人忽然召见你，她上下打量你一番，冷冷道："你生得这样好，整日在宝玉房里，安的什么心？"',
    choices:[
      {text:'据理力争',effects:{'attributes.emotion':{add:2},'relationships.jbaoyu':{add:3}},flags:{evt_argue_wangfuren:true}},
      {text:'低头不语',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_qingwen_05', name:'秋窗风雨', character:'qingwen', probability:0.15,
    conditions:{'relationships.jbaoyu':{min:60},'flags.evt_mend_cloak':true},
    text:'秋雨夜，你病中独坐。宝玉偷偷来看你，带来一碗热汤。他握着你冰凉的手道："晴雯，你快好起来。"你红了眼眶，心中涌起一股暖意。',
    choices:[
      {text:'握着他的手不放',effects:{'relationships.jbaoyu':{add:5},'attributes.emotion':{add:3},'attributes.health':{add:1}},flags:{evt_baoyu_care:true}},
      {text:'催他快走，怕人看见',effects:{'attributes.wisdom':{add:1},'relationships.jbaoyu':{add:2}}}
    ]},

  { id:'evt_qingwen_06', name:'绣坊传闻', character:'qingwen', probability:0.2,
    conditions:{'attributes.talent':{min:7}},
    text:'你在做针线时，秋纹走过来说："外头的绣坊听说你的手艺，想请你做一幅绣屏，出价二十两银子呢。"',
    choices:[
      {text:'接下这活',effects:{'attributes.fortune':{add:2},'attributes.talent':{add:1}},flags:{evt_embroidery_job:true}},
      {text:'婉言谢绝',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_xiren_01', name:'王夫人召见', character:'xiren', probability:0.3,
    conditions:{},
    text:'王夫人私下召见你，问道："宝玉近日在园中都做些什么？你可要好好看着，别让他被那些狐媚子勾了去。"',
    choices:[
      {text:'如实禀报',effects:{'attributes.wisdom':{add:1}},flags:{evt_report_baoyu:true}},
      {text:'只说好话',effects:{'relationships.jbaoyu':{add:2},'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_xiren_02', name:'晴雯拌嘴', character:'xiren', probability:0.25,
    conditions:{},
    text:'晴雯又与你拌嘴了，她冷笑道："你倒会做人，太太面前一个样，背地里又一个样。"',
    choices:[
      {text:'忍气吞声',effects:{'attributes.wisdom':{add:1}}},
      {text:'据理力争',effects:{'relationships.qingwen':{add:-3},'attributes.emotion':{add:2}},flags:{evt_qingwen_argue:true}}
    ]},

  { id:'evt_xiren_03', name:'规劝宝玉', character:'xiren', probability:0.2,
    conditions:{'relationships.jbaoyu':{min:60}},
    text:'你趁宝玉心情好时劝道："二爷，你也该收收心了。老太太和太太都盼着你好呢。"宝玉叹道："你说的我都懂，只是……"',
    choices:[
      {text:'继续苦劝',effects:{'relationships.jbaoyu':{add:-2},'attributes.wisdom':{add:2}},flags:{evt_persist_advice:true}},
      {text:'温柔以对',effects:{'relationships.jbaoyu':{add:3},'attributes.emotion':{add:1}},flags:{evt_gentle_approach:true}}
    ]},

  { id:'evt_xiren_04', name:'暗中进言', character:'xiren', probability:0.2,
    conditions:{'flags.evt_report_baoyu':true},
    text:'你再次去见王夫人，她拉着你的手道："好孩子，你是个明白人。宝玉身边那些人，你替我多留心着。"',
    choices:[
      {text:'暗示晴雯等人不安分',effects:{'attributes.wisdom':{add:1},'relationships.qingwen':{add:-5}},flags:{evt_hint_qingwen:true}},
      {text:'只说会留心，不多言',effects:{'attributes.wisdom':{add:2}}}
    ]},

  { id:'evt_xiren_05', name:'晴雯被逐', character:'xiren', probability:0.15,
    conditions:{'flags.evt_hint_qingwen':true},
    text:'王夫人下令将晴雯逐出大观园。你站在廊下，看着晴雯被人架着走出去，她回头看了你一眼，目光中满是怨恨。你心中一颤——这是你想要的结果吗？',
    choices:[
      {text:'心中愧疚但不敢出声',effects:{'attributes.emotion':{add:2},'attributes.wisdom':{add:-1}}},
      {text:'说服自己这是为宝玉好',effects:{'attributes.wisdom':{add:1}},flags:{evt_qingwen_expelled:true}}
    ]},

  { id:'evt_xiren_06', name:'蒋玉菡来访', character:'xiren', probability:0.2,
    conditions:{},
    text:'蒋玉菡来怡红院拜访宝玉，他温文尔雅，对你客气有礼。临走时他低声道："姑娘若有难处，可来找我。"',
    choices:[
      {text:'客气道谢',effects:{'attributes.charm':{add:1}},flags:{evt_jiang_yuhan_meet:true}},
      {text:'不以为意',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_attr_health_low_01', name:'身体抱恙', character:'', probability:0.35,
    conditions:{'attributes.health':{max:3}},
    text:'你感到一阵眩晕，四肢无力。近日操劳过度，身体似乎到了极限。',
    choices:[
      {text:'卧床休息一日',effects:{'attributes.health':{add:3},'attributes.fortune':{add:-1}}},
      {text:'强撑着继续做事',effects:{'attributes.health':{add:-2},'attributes.wisdom':{add:1}}},
      {text:'请大夫诊治',effects:{'attributes.health':{add:4},'attributes.fortune':{add:-2}}}
    ]},

  { id:'evt_attr_health_low_02', name:'旧疾复发', character:'', probability:0.25,
    conditions:{'attributes.health':{max:2}, 'flags.evt_attr_health_low_01':true},
    text:'你的病情加重了！咳嗽不止，连说话都费力。紫鹃/袭人/平儿急得团团转，连忙去请大夫。',
    choices:[
      {text:'安心养病',effects:{'attributes.health':{add:4},'attributes.emotion':{add:-1}}},
      {text:'担心府中的事',effects:{'attributes.emotion':{add:2},'attributes.health':{add:-1}}}
    ]},

  { id:'evt_attr_emotion_high_01', name:'心绪难平', character:'', probability:0.3,
    conditions:{'attributes.emotion':{min:9}},
    text:'你心中翻涌着难以名状的情绪——是欢喜？是悲伤？还是对这命运的无奈？你独坐窗前，久久不能平静。',
    choices:[
      {text:'以诗寄情，抒发心中所感',effects:{'attributes.talent':{add:2},'attributes.emotion':{add:-2}},flags:{attr_poem_outlet:true}},
      {text:'找人倾诉',effects:{'attributes.emotion':{add:-3}},flags:{attr_confide:true}},
      {text:'强压心中情绪',effects:{'attributes.wisdom':{add:1},'attributes.health':{add:-1}}}
    ]},

  { id:'evt_attr_wisdom_high_01', name:'洞察世事', character:'', probability:0.25,
    conditions:{'attributes.wisdom':{min:10}},
    text:'你忽然看透了许多从前看不透的事——贾府的繁华不过是镜花水月，众人的笑脸背后各怀心思。你心中既有明悟，又有悲凉。',
    choices:[
      {text:'将所见所感记下',effects:{'attributes.talent':{add:2},'attributes.wisdom':{add:1}},flags:{attr_insight_record:true}},
      {text:'装作什么都不知道',effects:{'attributes.charm':{add:1}},flags:{attr_insight_hide:true}}
    ]},

  { id:'evt_attr_talent_high_01', name:'才思泉涌', character:'', probability:0.25,
    conditions:{'attributes.talent':{min:10}},
    text:'今日灵感如泉涌，你提笔便是一首好诗，落墨便是一幅佳作。连你自己都惊讶于自己的才情。',
    choices:[
      {text:'趁兴创作',effects:{'attributes.talent':{add:2},'attributes.emotion':{add:2}},flags:{attr_create_work:true}},
      {text:'将灵感留待来日',effects:{'attributes.wisdom':{add:1}}}
    ]},

  { id:'evt_attr_fortune_low_01', name:'诸事不顺', character:'', probability:0.3,
    conditions:{'attributes.fortune':{max:3}},
    text:'这几日诸事不顺——想做的事做不成，想见的人见不到，就连走路都差点摔倒。难道是运势不佳？',
    choices:[
      {text:'去庙里祈福',effects:{'attributes.fortune':{add:3},'attributes.emotion':{add:1}},flags:{attr_pray:true}},
      {text:'静待时来运转',effects:{'attributes.wisdom':{add:1}}},
      {text:'更加努力改变命运',effects:{'attributes.wisdom':{add:2},'attributes.health':{add:-1}},flags:{attr_fight_fate:true}}
    ]},

  { id:'evt_attr_charm_high_01', name:'人缘极佳', character:'', probability:0.25,
    conditions:{'attributes.charm':{min:10}},
    text:'不知为何，最近人人都对你另眼相看。下人见了你都格外殷勤，姐妹们也爱找你说话。你成了园中最受欢迎的人。',
    choices:[
      {text:'利用人缘为他人谋利',effects:{'attributes.wisdom':{add:2},'attributes.charm':{add:1}},flags:{attr_use_charm:true}},
      {text:'保持谦逊',effects:{'attributes.wisdom':{add:1}},flags:{attr_humble:true}}
    ]},

  { id:'evt_attr_balance_good_01', name:'身心俱佳', character:'', probability:0.15,
    conditions:{'attributes.health':{min:7},'attributes.emotion':{min:7}},
    text:'今日精神格外好，身体康健，心情愉悦。你觉得做什么都顺手，看什么都顺眼。',
    choices:[
      {text:'趁着状态好多做些事',effects:{'attributes.wisdom':{add:1},'attributes.talent':{add:1}},flags:{attr_productive_day:true}},
      {text:'好好享受这一天',effects:{'attributes.emotion':{add:2},'attributes.health':{add:1}}}
    ]},

  { id:'evt_attr_balance_bad_01', name:'身心俱疲', character:'', probability:0.2,
    conditions:{'attributes.health':{max:4},'attributes.emotion':{max:4}},
    text:'你感到前所未有的疲惫——身体沉重，心情低落，什么都不想做。也许你需要休息了。',
    choices:[
      {text:'放下一切休息',effects:{'attributes.health':{add:3},'attributes.emotion':{add:2}},flags:{attr_rest_day:true}},
      {text:'硬撑着继续',effects:{'attributes.health':{add:-2},'attributes.emotion':{add:-1}},flags:{attr_overwork:true}}
    ]}
];
