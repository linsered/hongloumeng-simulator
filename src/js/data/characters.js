var HLM = window.HLM || {};

HLM.CharacterData = {
    jbaoyu: {
        id: 'jbaoyu',
        name: '贾宝玉',
        title: '怡红公子',
        gender: '男',
        age: 16,
        portrait: '🎭',
        color: '#ff69b4',
        attributes: { wisdom: 6, charm: 9, talent: 8, emotion: 10, fortune: 7, health: 6 },
        background: '贾宝玉，荣国府贾政之次子，自幼衔玉而生，被视为贾府命根。他生得面若中秋之月，色如春晓之花，鬓若刀裁，眉如墨画，面如桃瓣，目若秋波。虽怒时而若笑，即瞋视而有情。他天性聪慧，却厌恶仕途经济，视功名为粪土，独钟情于女儿世界，认为"女儿是水做的骨肉，男子是泥做的骨肉"。在大观园中，他与众姐妹朝夕相处，吟诗作对，品茗赏花，过着诗酒风流的日子。他深爱林黛玉之才情与真性情，又敬薛宝钗之端庄贤淑，内心常在二者之间挣扎。他虽身处富贵之巅，却对世俗礼教深感不满，渴望一个真情至性的世界。那块通灵宝玉，既是他的命根，也是他命运的枷锁，注定了他终将面对家族衰败与情感破碎的悲剧。',
        relationships: {
            ldaiyu: { type: '恋人', value: 90, desc: '木石前盟，心意相通' },
            xbaochai: { type: '表亲', value: 70, desc: '金玉良缘，礼教之选' },
            shi_xiangyun: { type: '表亲', value: 75, desc: '青梅之谊，豪爽相投' },
            jiamu: { type: '祖母', value: 95, desc: '命根心肝，溺爱有加' },
            qingwen: { type: '丫鬟', value: 80, desc: '红袖添香，知己之情' },
            xiren: { type: '丫鬟', value: 85, desc: '贴身侍奉，温柔守候' },
            tanchun: { type: '兄妹', value: 75, desc: '兄妹情深，互相敬重' },
            wangxifeng: { type: '表嫂', value: 70, desc: '疼爱有加，关照备至' },
            miaoyu: { type: '知己', value: 55, desc: '槛外槛内，似有若无' }
        },
        storylines: [
            { id: 'baoyu_main', name: '木石前盟', desc: '追寻与黛玉的前世姻缘，在世俗压力下守护真爱' },
            { id: 'baoyu_rebel', name: '离经叛道', desc: '反抗仕途经济之路，坚持自我本心' },
            { id: 'baoyu_awaken', name: '大梦初醒', desc: '经历家族兴衰，最终悟道归真' }
        ],
        startScene: 'yihong_yuan',
        startNode: 'baoyu_ch1_01'
    },
    ldaiyu: {
        id: 'ldaiyu',
        name: '林黛玉',
        title: '潇湘妃子',
        gender: '女',
        age: 15,
        portrait: '🌸',
        color: '#90ee90',
        attributes: { wisdom: 9, charm: 8, talent: 10, emotion: 10, fortune: 3, health: 3 },
        background: '林黛玉，扬州巡盐御史林如海与贾敏之独女。她生得两弯似蹙非蹙罥烟眉，一双似喜非喜含情目。态生两靥之愁，娇袭一身之病。泪光点点，娇喘微微。闲静时如姣花照水，行动处似弱柳扶风。她自幼丧母，寄居外祖母家，虽有贾母疼爱，终是寄人篱下，心中常生凄凉之感。她才情绝世，诗才冠绝大观园，咏白海棠、菊花诗、葬花吟皆为传世佳作。她性情敏感多疑，却也是至真至纯之人，对宝玉一往情深，二人心意相通，却因金玉之说常生嫌隙。她以泪报恩，前世为绛珠仙草，受神瑛侍者甘露之惠，今生以泪相还。她葬花时的那首《葬花吟》，道尽了自己命运的悲凉："一朝春尽红颜老，花落人亡两不知。"',
        relationships: {
            jbaoyu: { type: '恋人', value: 95, desc: '木石前盟，至死不渝' },
            jiamu: { type: '外祖母', value: 80, desc: '骨肉至亲，疼爱有加' },
            xbaochai: { type: '金兰', value: 60, desc: '亦敌亦友，惺惺相惜' },
            zijuan: { type: '丫鬟', value: 90, desc: '忠心耿耿，情同姐妹' },
            shi_xiangyun: { type: '诗友', value: 65, desc: '才情相赏，偶有龃龉' },
            miaoyu: { type: '诗友', value: 55, desc: '才情相赏，性情相近' },
            tanchun: { type: '诗友', value: 60, desc: '诗社同好，互相敬重' }
        },
        storylines: [
            { id: 'daiyu_main', name: '还泪之约', desc: '以泪还恩，在红尘中寻找心灵的归宿' },
            { id: 'daiyu_poet', name: '诗魂傲骨', desc: '以诗言志，在文学中寻找自我价值' },
            { id: 'daiyu_independent', name: '孤芳自赏', desc: '摆脱寄人篱下的命运，寻找独立之路' }
        ],
        startScene: 'xiaoxiang_guan',
        startNode: 'ldaiyu_ch1_01'
    },
    xbaochai: {
        id: 'xbaochai',
        name: '薛宝钗',
        title: '蘅芜君',
        gender: '女',
        age: 17,
        portrait: '💮',
        color: '#ddd',
        attributes: { wisdom: 9, charm: 8, talent: 8, emotion: 6, fortune: 7, health: 8 },
        background: '薛宝钗，皇商薛姨妈之女，薛蟠之妹。她生得肌骨莹润，举止娴雅，唇不点而红，眉不画而翠，脸若银盆，眼如水杏。她博学多才，通晓诗文、医药、绘画，却从不炫耀。她佩金锁，与宝玉通灵玉暗合"金玉良缘"之说。她为人处世圆融通达，深得上下人心，王夫人尤喜其端庄稳重。她常劝宝玉留意仕途经济，虽出于好意，却总令宝玉不快。她表面冷淡寡情，实则内心亦有波澜，那首柳絮词"好风凭借力，送我上青云"便透露出她不甘平庸的心志。她虽是"金玉良缘"的当事人，却并非主动争取之人，一切听由长辈安排。她的冷香丸需四季花蕊配制，恰如她以理性克制情感的人生态度。她看似赢得了婚姻，却未必赢得了爱情，最终独守空房，亦是悲剧中人。',
        relationships: {
            jbaoyu: { type: '表亲', value: 70, desc: '金玉之说，礼教牵绊' },
            ldaiyu: { type: '金兰', value: 65, desc: '金兰契友，互有欣赏' },
            xue_yima: { type: '母亲', value: 90, desc: '母女相依，言听计从' },
            wangfuren: { type: '姨母', value: 85, desc: '长辈青睐，亲上加亲' },
            ying_er: { type: '丫鬟', value: 80, desc: '主仆情深，忠心不二' },
            tanchun: { type: '诗友', value: 70, desc: '才干相赏，互相支持' },
            wangxifeng: { type: '表姐', value: 70, desc: '姑侄关系，互相客气' }
        },
        storylines: [
            { id: 'baochai_main', name: '金玉良缘', desc: '在礼教与真情之间寻找平衡' },
            { id: 'baochai_power', name: '齐家治国', desc: '以才干管理家务，展现女中豪杰之风' },
            { id: 'baochai_freedom', name: '破茧成蝶', desc: '挣脱礼教束缚，追寻内心真实' }
        ],
        startScene: 'hengwu_yuan',
        startNode: 'xbaochai_ch1_01'
    },
    shi_xiangyun: {
        id: 'shi_xiangyun',
        name: '史湘云',
        title: '枕霞旧友',
        gender: '女',
        age: 15,
        portrait: '🦋',
        color: '#ffa500',
        attributes: { wisdom: 7, charm: 8, talent: 9, emotion: 7, fortune: 4, health: 9 },
        background: '史湘云，保龄侯史鼐之侄女，贾母的娘家侄孙女。她自幼父母双亡，寄养于叔婶家中，虽为侯门千金，却常做针线到深夜，身世颇为可怜。然而她天性豪爽豁达，心直口快，从不见愁苦之色。她生得蜂腰猿背，鹤势螂形，英气勃勃，醉眠芍药裀更是千古美谈。她才思敏捷，诗才与黛玉不相上下，联诗时更是才如泉涌。她说话咬舌，将"二哥哥"唤作"爱哥哥"，更添几分娇憨可爱。她与宝玉情谊深厚，却坦坦荡荡，从无儿女私情之态。她虽命运多舛，却始终乐观开朗，"也宜墙角也宜盆"的海棠诗正是她人生态度的写照。她曾与翠缕论阴阳之理，见识不凡，可见其并非只知嬉笑之人。她的人生哲学是：与其自怨自艾，不如笑对人生。',
        relationships: {
            jbaoyu: { type: '挚友', value: 80, desc: '青梅竹马，坦荡相待' },
            ldaiyu: { type: '诗友', value: 65, desc: '才情相当，偶有争执' },
            jiamu: { type: '娘家亲戚', value: 85, desc: '史家孙女，疼爱有加' },
            xbaochai: { type: '知己', value: 80, desc: '宝姐姐最可亲' }
        },
        storylines: [
            { id: 'xiangyun_main', name: '云中白鹤', desc: '在困境中保持乐观，以豪爽之气面对人生' },
            { id: 'xiangyun_poet', name: '诗酒风流', desc: '以诗会友，在大观园中绽放才情' },
            { id: 'xiangyun_destiny', name: '寒塘鹤影', desc: '探寻命运真相，寻找属于自己的归宿' }
        ],
        startScene: 'daguan_yuan_gate',
        startNode: 'shi_xiangyun_ch1_01'
    },
    jiamu: {
        id: 'jiamu',
        name: '贾母',
        title: '史太君',
        gender: '女',
        age: 70,
        portrait: '👑',
        color: '#ffd700',
        attributes: { wisdom: 10, charm: 7, talent: 6, emotion: 8, fortune: 9, health: 5 },
        background: '贾母，金陵世勋史侯之女，荣国公贾源之媳，贾代善之妻。她是贾府辈分最高的老祖宗，虽已年迈，却精神矍铄，耳聪目明，思维敏捷。她年轻时也是精明强干之人，将偌大贾府治理得井井有条。如今虽已退居幕后，却仍是贾府真正的定海神针，凡有大事皆须禀报于她。她最疼爱孙子宝玉和外孙女黛玉，视宝玉为命根，待黛玉如亲孙女。她喜欢热闹，爱看戏听曲，逢年过节总要大摆筵席，与儿孙们同乐。她虽享尽荣华富贵，却也深谙世事，对家族衰败的征兆有所察觉，却无力回天。她的一生，是贾府兴衰的缩影，从鼎盛到式微，她看尽人间繁华与苍凉。她是这个大家族最后的守护者，一旦她撒手人寰，贾府便如大厦将倾，再无人能撑。',
        relationships: {
            jbaoyu: { type: '孙子', value: 100, desc: '命根心肝，溺爱至极' },
            ldaiyu: { type: '外孙女', value: 90, desc: '骨肉至亲，格外怜惜' },
            wangfuren: { type: '儿媳', value: 70, desc: '表面恭敬，暗有嫌隙' },
            jiazheng: { type: '儿子', value: 65, desc: '严父弱子，关系疏远' },
            xingfuren: { type: '儿媳', value: 60, desc: '老实无能，不甚看重' },
            wangxifeng: { type: '孙媳', value: 85, desc: '承欢膝下，深得欢心' },
            tanchun: { type: '孙女', value: 80, desc: '才干出众，格外器重' }
        },
        storylines: [
            { id: 'jiamu_main', name: '家族守护', desc: '以毕生之力维系贾府的荣光与体面' },
            { id: 'jiamu_wisdom', name: '洞若观火', desc: '以老祖母的智慧洞察家族命运' },
            { id: 'jiamu_legacy', name: '余晖斜阳', desc: '在暮年回顾一生，安排后事' }
        ],
        startScene: 'rongguo_hall',
        startNode: 'jiamu_ch1_01'
    },
    tanchun: {
        id: 'tanchun',
        name: '贾探春',
        title: '蕉下客',
        gender: '女',
        age: 16,
        portrait: '🍂',
        color: '#d46030',
        attributes: { wisdom: 9, charm: 7, talent: 8, emotion: 6, fortune: 5, health: 8 },
        background: '贾探春，贾政与赵姨娘之女，排行第三。她虽为庶出，却志向高远，才干出众，不甘因出身而被人轻视。她生得削肩细腰，长挑身材，鸭蛋脸面，俊眼修眉，顾盼神飞，文彩精华，见之忘俗。她精明能干，曾代凤姐理家，大刀阔斧地兴利除弊，开源节流，连凤姐也让她三分。她性格刚烈，自尊心极强，与生母赵姨娘的粗鄙形成鲜明对比，她极力维护自己的尊严，不愿因庶出身份而低人一等。她善书法，秋爽斋中满是大字，气派非凡。她组织海棠诗社，展现领袖才能。她的远见卓识在贾府中无人能及，她曾叹息"这样大族人家，若从外头杀来，一时是杀不死的"，可惜她终究是女儿身，终将远嫁他乡，如断线风筝，再难回头。她的才干与抱负，在那个时代注定无法施展，令人扼腕叹息。',
        relationships: {
            jbaoyu: { type: '兄妹', value: 75, desc: '兄妹情深，互相敬重' },
            jiamu: { type: '祖母', value: 80, desc: '祖母疼爱，器重其才' },
            zhaoyiniang: { type: '生母', value: 30, desc: '庶出之痛，母女嫌隙' },
            wangfuren: { type: '嫡母', value: 65, desc: '表面恭敬，暗自防备' },
            xbaochai: { type: '诗友', value: 70, desc: '才干相赏，互相支持' }
        },
        storylines: [
            { id: 'tanchun_main', name: '巾帼不让须眉', desc: '以才干证明庶出之女亦可撑起半边天' },
            { id: 'tanchun_reform', name: '兴利除弊', desc: '改革贾府弊政，力挽狂澜' },
            { id: 'tanchun_faraway', name: '远嫁天涯', desc: '面对远嫁命运，选择抗争或接受' }
        ],
        startScene: 'qiushuang_zhai',
        startNode: 'tanchun_ch1_01'
    },
    wangxifeng: {
        id: 'wangxifeng',
        name: '王熙凤',
        title: '凤辣子',
        gender: '女',
        age: 22,
        portrait: '🔥',
        color: '#ff4500',
        attributes: { wisdom: 9, charm: 8, talent: 9, emotion: 4, fortune: 8, health: 5 },
        background: '王熙凤，贾琏之妻，王夫人之内侄女。她生得一双丹凤三角眼，两弯柳叶吊梢眉，身量苗条，体格风骚，粉面含春威不露，丹唇未启笑先闻。她是贾府实际的管家人，手握大权，精明强干，杀伐决断，令行禁止。她口齿伶俐，善于逢迎，深得贾母欢心，却也因此树敌众多。她虽不识字，却精于算计，将偌大贾府打理得看似井井有条，实则暗流涌动。她放债取利，中饱私囊，手段毒辣，逼死尤二姐更是其狠毒本性的体现。她信奉"我是从来不信什么阴司地狱报应的"，行事无所顾忌。然而她也有其可怜之处，身体多病，夫妻不睦，最终"机关算尽太聪明，反误了卿卿性命"。她是贾府中最复杂的人物之一，既有令人钦佩的才干，也有令人不寒而栗的狠辣，是一个被权力和欲望吞噬的悲剧人物。',
        relationships: {
            jiamu: { type: '孙媳', value: 85, desc: '承欢膝下，深得欢心' },
            wangfuren: { type: '姑母', value: 80, desc: '姑侄联手，共掌家务' },
            jialian: { type: '夫妻', value: 40, desc: '同床异梦，互相算计' },
            ping_er: { type: '心腹', value: 85, desc: '主仆情深，亦友亦仆' },
            jbaoyu: { type: '表弟', value: 70, desc: '疼爱有加，关照备至' },
            tanchun: { type: '妹妹', value: 65, desc: '才干相赏，互相防备' }
        },
        storylines: [
            { id: 'xifeng_main', name: '铁腕治家', desc: '以雷霆手段管理贾府，权倾一时' },
            { id: 'xifeng_downfall', name: '机关算尽', desc: '权力游戏中步步惊心，最终自食其果' },
            { id: 'xifeng_redemption', name: '浪子回头', desc: '在家族危难之际，选择善路' }
        ],
        startScene: 'rongguo_hall',
        startNode: 'wangxifeng_ch1_01'
    },
    liwan: {
        id: 'liwan',
        name: '李纨',
        title: '稻香老农',
        gender: '女',
        age: 25,
        portrait: '🌾',
        color: '#c0b050',
        attributes: { wisdom: 7, charm: 5, talent: 7, emotion: 5, fortune: 4, health: 7 },
        background: '李纨，字宫裁，国子监祭酒李守中之女，贾珠之遗孀。她出身书香门第，父亲曾任国子监祭酒，家中男女皆重读书。她嫁入贾府不久，丈夫贾珠便一病而亡，留下她与幼子贾兰相依为命。她青春丧偶，心如死灰，从此不施粉黛，不闻外事，唯以课子读书、侍奉公婆为念。她居住稻香村，过着清心寡欲的日子，如槁木死灰一般。然而她并非全无才情，在海棠诗社中担任社长，品评诗作公正有据，可见其文学素养不低。她将全部希望寄托在儿子贾兰身上，望子成龙之心切切。她虽处富贵之地，却如出家人般淡泊，不与人争，不与事较，在贾府中是出了名的"大菩萨"。然而这份淡泊之下，是否真的心如止水？还是将满腔热血都化作了对儿子的殷切期望？她的人生，是封建礼教下寡妇的典型写照，令人同情，也令人深思。',
        relationships: {
            jialan: { type: '母子', value: 100, desc: '全部希望，唯此一子' },
            jbaoyu: { type: '叔嫂', value: 65, desc: '和睦相处，不即不离' },
            tanchun: { type: '妯娌', value: 70, desc: '诗社同好，互相敬重' },
            wangfuren: { type: '婆媳', value: 60, desc: '守节儿媳，相安无事' }
        },
        storylines: [
            { id: 'liwan_main', name: '望子成龙', desc: '以毕生心血培养贾兰，等待出头之日' },
            { id: 'liwan_awaken', name: '枯木逢春', desc: '在诗社中重新找到生活的色彩' },
            { id: 'liwan_independent', name: '自立门户', desc: '摆脱寡妇身份的束缚，活出自我' }
        ],
        startScene: 'daoxiang_cun',
        startNode: 'liwan_ch1_01'
    },
    miaoyu: {
        id: 'miaoyu',
        name: '妙玉',
        title: '槛外人',
        gender: '女',
        age: 18,
        portrait: '🌙',
        color: '#9370db',
        attributes: { wisdom: 8, charm: 7, talent: 9, emotion: 7, fortune: 3, health: 5 },
        background: '妙玉，苏州仕宦人家之女，自小多病，买了许多替身皆不中用，只得自己入了空门，带发修行。她精通文墨，熟读经典，棋艺精湛，茶道高妙。她随师父进京，师父圆寂后，被王夫人请入大观园栊翠庵中居住。她为人孤高自许，目下无人，却又欲洁何曾洁，云空未必空。她以古玩珍器待客，却嫌刘姥姥用过的成窑杯脏，要掷出去，可见其洁癖之深。然而她对宝玉却另眼相看，生日时送拜帖，梅花雪水煎茶相待，分明是尘缘未断。她那句"纵有千年铁门槛，终须一个土馒头"虽是看破之语，她自己却始终未能真正超脱。她既不能如出家人般四大皆空，又不能如俗世人般随性而活，卡在槛里槛外之间，进退两难。她的高洁是真实的，她的矛盾也是真实的，正是这份真实，使她成为大观园中最独特的一道风景。',
        relationships: {
            ldaiyu: { type: '诗友', value: 70, desc: '才情相赏，性情相近' },
            jbaoyu: { type: '知己', value: 75, desc: '槛外槛内，似有若无' },
            xbaochai: { type: '相识', value: 55, desc: '彼此客气，未交深心' },
            jiamu: { type: '施主', value: 60, desc: '王夫人请入园中，以礼相待' }
        },
        storylines: [
            { id: 'miaoyu_main', name: '槛外之人', desc: '在空门与红尘之间寻找真正的归宿' },
            { id: 'miaoyu_tea', name: '茶道禅心', desc: '以茶悟道，在修行中寻找内心平静' },
            { id: 'miaoyu_world', name: '入世历劫', desc: '放下清高，真正体验人间冷暖' }
        ],
        startScene: 'gufang_bridge',
        startNode: 'miaoyu_ch1_01'
    },
    qingwen: {
        id: 'qingwen',
        name: '晴雯',
        title: '芙蓉仙子',
        gender: '女',
        age: 16,
        portrait: '🌺',
        color: '#ff6347',
        attributes: { wisdom: 6, charm: 9, talent: 8, emotion: 9, fortune: 2, health: 4 },
        background: '晴雯，贾宝玉房中四大丫鬟之首。她原是赖大家买来的丫鬟，因贾母见她生得伶俐标致，便赏了宝玉。她水蛇腰，削肩膀，眉眼又有些像林黛玉，是丫鬟中最出挑的一个。她心灵手巧，补雀金裘时独她能界线，一针一线尽显巧思。她性格刚烈，心比天高，身为下贱，却从不自轻自贱。她撕扇子千金一笑，何等率性洒脱；她病补雀金裘，何等忠心赤诚。她口齿锋利，看不惯的事便要直言，得罪了不少人。她与宝玉之间清清白白，却被王夫人以"狐狸精"之名逐出大观园，最终抱屈而亡。宝玉作《芙蓉女儿诔》祭她，"其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁"，字字血泪，感人至深。她是丫鬟中最有骨气的一个，宁折不弯，至死不屈，如一朵芙蓉花，虽被风雨摧折，却永远绽放着不屈的美丽。',
        relationships: {
            jbaoyu: { type: '主仆', value: 85, desc: '知己之情，清白无瑕' },
            xiren: { type: '同僚', value: 40, desc: '暗中较劲，互不服气' },
            wangfuren: { type: '仇敌', value: 10, desc: '被视为狐媚，恨之入骨' },
            sheyue: { type: '同僚', value: 60, desc: '同房姐妹，偶有口角' }
        },
        storylines: [
            { id: 'qingwen_main', name: '心比天高', desc: '以丫鬟之身追求尊严与自由' },
            { id: 'qingwen_craft', name: '巧手天工', desc: '以绝技赢得尊重，改变命运' },
            { id: 'qingwen_freedom', name: '冲出樊笼', desc: '逃离贾府，寻找属于自己的天空' }
        ],
        startScene: 'yihong_yuan',
        startNode: 'qingwen_ch1_01'
    },
    xiren: {
        id: 'xiren',
        name: '袭人',
        title: '贤袭人',
        gender: '女',
        age: 18,
        portrait: '🌼',
        color: '#f0e68c',
        attributes: { wisdom: 7, charm: 6, talent: 5, emotion: 6, fortune: 5, health: 7 },
        background: '袭人，本名花珍珠，贾宝玉房中四大丫鬟之一，原是贾母的丫鬟，后拨给宝玉。她生得肌肤莹润，容貌端庄，性情温和，行事稳重。她姓花，宝玉取"花气袭人知骤暖"之意，赐名袭人。她是怡红院中最得力的丫鬟，将宝玉的饮食起居照顾得无微不至，是王夫人暗中认可的宝玉准姨娘。她温柔和顺，贤良淑德，常以正言规劝宝玉，要他读书上进，不可荒唐。她与宝玉有肌肤之亲，却从不恃宠而骄，反而更加谨慎小心。她暗中向王夫人进言，要防备宝玉与姑娘们过于亲近，虽出于忠心，却也间接导致了晴雯被逐的悲剧。她是封建礼教的忠实践行者，以贤淑之名行规训之实。她的一生都在为别人而活，先是贾母，后是宝玉，再是王夫人，唯独没有为自己活过。她最终嫁与蒋玉菡，虽非本愿，却也算是善终，只是那桃花扇底的旧梦，终究是散了。',
        relationships: {
            jbaoyu: { type: '主仆', value: 90, desc: '贴身侍奉，情深意重' },
            wangfuren: { type: '靠山', value: 85, desc: '暗中投靠，互为倚仗' },
            qingwen: { type: '同僚', value: 45, desc: '明争暗斗，各怀心思' },
            jiamu: { type: '旧主', value: 75, desc: '贾母拨给宝玉，感恩在心' }
        },
        storylines: [
            { id: 'xiren_main', name: '贤良之路', desc: '以贤淑之名在贾府中谋求安稳地位' },
            { id: 'xiren_power', name: '暗中布局', desc: '在权力博弈中守护自己的利益' },
            { id: 'xiren_freedom', name: '花落谁家', desc: '挣脱奴婢身份，寻找真正的归宿' }
        ],
        startScene: 'yihong_yuan',
        startNode: 'xiren_ch1_01'
    }
};
