var HLM = window.HLM || {};

HLM.SceneData = {
    daguan_yuan_gate: {
        id: 'daguan_yuan_gate',
        name: '大观园正门',
        description: '大观园正门，五间大门，上面桶瓦泥鳅脊，门栏窗槛皆是雕空花样，朱粉涂饰。门前石狮威严，左右守门小厮肃立。入园之人须得通传方可入内，寻常人等不得擅入。',
        gradient: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 30%, #4a2c6e 60%, #2a1a3e 100%)',
        backgroundColor: '#1a0a2e',
        ambientColor: '#6b3fa0',
        particles: [
            { type: 'firefly', style: 'animation: float-up 8s infinite; color: #ffd700;' },
            { type: 'firefly', style: 'animation: float-up 12s infinite 3s; color: #ffd700;' }
        ],
        music: 'ambient_night',
        seasonVariants: {
            spring: { gradient: 'linear-gradient(180deg, #2a1a4e 0%, #4a3c7e 30%, #6a5cae 60%, #3a2a5e 100%)', particles: [{ type: 'petal', style: 'animation: fall 10s infinite; color: #ffb7c5;' }] },
            summer: { gradient: 'linear-gradient(180deg, #0a2a1e 0%, #1b4c3e 30%, #2c6e5e 60%, #1a3a2e 100%)', particles: [{ type: 'firefly', style: 'animation: float-up 6s infinite; color: #90ee90;' }] },
            autumn: { gradient: 'linear-gradient(180deg, #2a1a0a 0%, #4c3b1e 30%, #6e5c2e 60%, #3a2a1a 100%)', particles: [{ type: 'leaf', style: 'animation: fall 8s infinite; color: #d4a030;' }] },
            winter: { gradient: 'linear-gradient(180deg, #1a2a3e 0%, #3a4a5e 30%, #5a6a7e 60%, #2a3a4e 100%)', particles: [{ type: 'snow', style: 'animation: fall 12s infinite; color: #ffffff;' }] }
        }
    },
    yihong_yuan: {
        id: 'yihong_yuan',
        name: '怡红院',
        description: '宝玉居所，院中海棠娇艳，芭蕉舒展，红香绿玉交相辉映。室内陈设精致华美，古玩字画琳琅满目，处处透着富贵公子的闲适风雅。院落幽深，回廊曲折，丫鬟婆子往来其间。',
        gradient: 'linear-gradient(180deg, #2e0a1a 0%, #5e1b3e 30%, #8e2c5e 60%, #4e1a2e 100%)',
        backgroundColor: '#2e0a1a',
        ambientColor: '#c05080',
        particles: [
            { type: 'petal', style: 'animation: fall 10s infinite; color: #ff69b4;' },
            { type: 'petal', style: 'animation: fall 14s infinite 5s; color: #ffb7c5;' }
        ],
        music: 'yihong_theme'
    },
    xiaoxiang_guan: {
        id: 'xiaoxiang_guan',
        name: '潇湘馆',
        description: '黛玉居所，千竿翠竹环绕，凤尾森森，龙吟细细。窗前竹影婆娑，案上诗书常伴。馆内清幽雅致，一几一榻皆见风骨，恰似主人孤高自许的品性。竹帘轻摇，墨香浮动。',
        gradient: 'linear-gradient(180deg, #0a1e0a 0%, #1b3e1b 30%, #2c5e2c 60%, #1a2e1a 100%)',
        backgroundColor: '#0a1e0a',
        ambientColor: '#50a050',
        particles: [
            { type: 'leaf', style: 'animation: fall-slow 15s infinite; color: #90ee90;' },
            { type: 'leaf', style: 'animation: fall-slow 20s infinite 8s; color: #7ccd7c;' }
        ],
        music: 'xiaoxiang_theme'
    },
    hengwu_yuan: {
        id: 'hengwu_yuan',
        name: '蘅芜苑',
        description: '宝钗居所，异草藤萝满布，不见花影唯闻异香。院中奇石嶙峋，藤蔓缠绕，虽无艳丽之花，却有淡雅之韵。室内素净清简，一如主人端庄持重之风，雪洞一般清冷。',
        gradient: 'linear-gradient(180deg, #1a1a2e 0%, #2e2e4e 30%, #4e4e6e 60%, #2a2a3e 100%)',
        backgroundColor: '#1a1a2e',
        ambientColor: '#8888cc',
        particles: [
            { type: 'mist', style: 'animation: drift 20s infinite; color: rgba(200,200,255,0.3);' }
        ],
        music: 'hengwu_theme'
    },
    daoxiang_cun: {
        id: 'daoxiang_cun',
        name: '稻香村',
        description: '李纨居所，数楹茅屋，青篱土井，一派田园风光。虽处富贵之地，却守清贫之风。屋外菜畦花径，泥墙矮篱，与园中其他院落的奢华形成鲜明对比，别有一番质朴意趣。',
        gradient: 'linear-gradient(180deg, #2e2a0a 0%, #5e541b 30%, #8e7e2c 60%, #4e4a1a 100%)',
        backgroundColor: '#2e2a0a',
        ambientColor: '#c0b050',
        particles: [
            { type: 'leaf', style: 'animation: fall 12s infinite; color: #d4a030;' }
        ],
        music: 'daoxiang_theme'
    },
    qiushuang_zhai: {
        id: 'qiushuang_zhai',
        name: '秋爽斋',
        description: '探春居所，三间屋子不曾在隔断，极为阔朗。案上大鼎、大观、大窑，处处显出三小姐的阔朗大气。墙上米襄阳烟雨图，颜鲁公对联，尽显主人高雅品味与须眉气概。',
        gradient: 'linear-gradient(180deg, #2e1a0a 0%, #5e3b1b 30%, #8e5c2c 60%, #4e2a1a 100%)',
        backgroundColor: '#2e1a0a',
        ambientColor: '#d08040',
        particles: [
            { type: 'leaf', style: 'animation: fall 8s infinite; color: #d46030;' }
        ],
        music: 'qiushuang_theme'
    },
    luxue_ting: {
        id: 'luxue_ting',
        name: '芦雪亭',
        description: '大观园中临水亭阁，四面环水，芦苇丛生。冬日雪后，芦花与白雪相映，别有意境。众姐妹曾在此赏雪联诗，围炉而坐，好不热闹。夏日荷风送爽，亦为消暑佳处。',
        gradient: 'linear-gradient(180deg, #1a2a3e 0%, #2a3a4e 30%, #3a4a5e 60%, #2a3040 100%)',
        backgroundColor: '#1a2a3e',
        ambientColor: '#7090c0',
        particles: [
            { type: 'snow', style: 'animation: fall 10s infinite; color: #ffffff;' }
        ],
        music: 'luxue_theme'
    },
    aoxiang_xie: {
        id: 'aoxiang_xie',
        name: '凹晶溪馆',
        description: '临水而建的精巧馆舍，月夜在此可见水中倒影，天上一轮皓月，水中一轮清影。黛玉与湘云曾在此联诗，"寒塘渡鹤影，冷月葬花魂"便出于此，实为大观园中最清幽绝妙之处。',
        gradient: 'linear-gradient(180deg, #0a0a2e 0%, #1b1b4e 30%, #2c2c6e 60%, #1a1a3e 100%)',
        backgroundColor: '#0a0a2e',
        ambientColor: '#5050c0',
        particles: [
            { type: 'moonbeam', style: 'animation: shimmer 8s infinite; color: rgba(200,200,255,0.5);' }
        ],
        music: 'aoxiang_theme'
    },
    tuishan_fang: {
        id: 'tuishan_fang',
        name: '凸碧山庄',
        description: '大观园中高处山上的庄院，登高远眺，全园景致尽收眼底。中秋之夜，贾母曾率众人在此赏月品笛，山风送爽，笛声悠扬。庄前古松苍翠，石径蜿蜒，自有一番高远气象。',
        gradient: 'linear-gradient(180deg, #1a1a0a 0%, #3a3a1b 30%, #5a5a2c 60%, #2a2a1a 100%)',
        backgroundColor: '#1a1a0a',
        ambientColor: '#a0a050',
        particles: [
            { type: 'firefly', style: 'animation: float-up 10s infinite; color: #ffd700;' }
        ],
        music: 'tuishan_theme'
    },
    wufeng_bridge: {
        id: 'wufeng_bridge',
        name: '沁芳桥',
        description: '大观园中主要桥梁，横跨沁芳溪上，白石为栏，雕镂精巧。桥下清流潺潺，游鱼可数。桥上可览两岸花木，春风拂面时花瓣随流而去，故有"花落水流红"之意境。',
        gradient: 'linear-gradient(180deg, #0a2a2e 0%, #1b4c4e 30%, #2c6e6e 60%, #1a3a3e 100%)',
        backgroundColor: '#0a2a2e',
        ambientColor: '#50b0b0',
        particles: [
            { type: 'petal', style: 'animation: flow 15s infinite; color: #ffb7c5;' }
        ],
        music: 'bridge_theme'
    },
    gufang_bridge: {
        id: 'gufang_bridge',
        name: '藕香榭',
        description: '水中小亭，四面环水，荷花环绕。夏日荷风送爽，清香扑面；秋日残荷听雨，别有韵味。亭中设竹榻茶几，可供小憩赏景。惜春常在此观荷作画，妙玉亦爱此处清幽。',
        gradient: 'linear-gradient(180deg, #0a1e2e 0%, #1b3e5e 30%, #2c5e7e 60%, #1a2e3e 100%)',
        backgroundColor: '#0a1e2e',
        ambientColor: '#5090c0',
        particles: [
            { type: 'petal', style: 'animation: float-up 12s infinite; color: #ffc0cb;' }
        ],
        music: 'ouxiang_theme'
    },
    ziling_fang: {
        id: 'ziling_fang',
        name: '紫菱洲',
        description: '迎春居所，洲上菱叶铺水面，紫花点点，水波粼粼。院落虽不甚华丽，却也清雅宜人。只是主人性情懦弱，不善经营，院中渐显萧索之态，与迎春的境遇颇为相似。',
        gradient: 'linear-gradient(180deg, #1e0a2e 0%, #3e1b5e 30%, #5e2c7e 60%, #2e1a4e 100%)',
        backgroundColor: '#1e0a2e',
        ambientColor: '#9050c0',
        particles: [
            { type: 'petal', style: 'animation: fall 12s infinite; color: #9370db;' }
        ],
        music: 'ziling_theme'
    },
    liao_feng_xuan: {
        id: 'liao_feng_xuan',
        name: '蓼风轩',
        description: '惜春居所，轩前蓼花红艳，秋风起时别有风致。室内画具齐全，笔墨纸砚一应俱全，小小姐常在此习画。虽年岁尚小，画技却已初见功底，尤善写意花鸟。',
        gradient: 'linear-gradient(180deg, #2e1a1e 0%, #5e2b3e 30%, #8e3c5e 60%, #4e1a2e 100%)',
        backgroundColor: '#2e1a1e',
        ambientColor: '#c06080',
        particles: [
            { type: 'leaf', style: 'animation: fall 10s infinite; color: #db7093;' }
        ],
        music: 'liaofeng_theme'
    },
    man_ting: {
        id: 'man_ting',
        name: '暖香坞',
        description: '大观园中暖阁，冬日里最为舒适。室内地炕烧得暖融融的，众人常聚于此围炉闲话。窗外雪花纷飞，窗内春意融融，姐妹们在此猜谜行令，好不热闹，实为冬日最佳去处。',
        gradient: 'linear-gradient(180deg, #2e1a0a 0%, #5e3b1b 30%, #7e4c2c 60%, #3e2a1a 100%)',
        backgroundColor: '#2e1a0a',
        ambientColor: '#e08040',
        particles: [
            { type: 'firefly', style: 'animation: float-up 8s infinite; color: #ffa500;' }
        ],
        music: 'nuanxiang_theme'
    },
    rongguo_hall: {
        id: 'rongguo_hall',
        name: '荣庆堂',
        description: '荣国府正堂，气势恢宏，雕梁画栋。堂中高悬"荣禧堂"匾额，乃御笔亲书。这里是贾府议事、待客、行礼之所，规矩森严，礼数周全。贾母常在此接受晚辈请安，处理家务大事。',
        gradient: 'linear-gradient(180deg, #2e0a0a 0%, #5e1b1b 30%, #8e2c2c 60%, #4e1a1a 100%)',
        backgroundColor: '#2e0a0a',
        ambientColor: '#c05050',
        particles: [
            { type: 'mist', style: 'animation: drift 15s infinite; color: rgba(255,200,100,0.2);' }
        ],
        music: 'hall_theme'
    },
    garden_path: {
        id: 'garden_path',
        name: '园中曲径',
        description: '大观园中蜿蜒小径，两旁花木扶疏，假山嶙峋。曲径通幽，一步一景，时而穿过月洞门，时而跨过小石桥。春来百花争艳，夏至绿荫如盖，秋日红叶似火，冬时白雪皑皑，四时景致各有千秋。',
        gradient: 'linear-gradient(180deg, #0a1e0a 0%, #1a3e1a 30%, #2a5e2a 60%, #1a2e1a 100%)',
        backgroundColor: '#0a1e0a',
        ambientColor: '#50a050',
        particles: [
            { type: 'leaf', style: 'animation: fall 10s infinite; color: #90ee90;' },
            { type: 'petal', style: 'animation: fall 15s infinite 5s; color: #ffb7c5;' }
        ],
        music: 'path_theme'
    }
};
