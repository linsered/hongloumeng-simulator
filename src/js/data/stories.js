var HLM = window.HLM || {};

HLM.StoryData = {
    baoyu_ch1_01: {
        id: 'baoyu_ch1_01', chapter: 1, title: '初入大观园',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '春日清晨，怡红院中海棠初绽，露珠未晞。贾宝玉自梦中醒来，恍惚间仍记得那太虚幻境中的仙姑与曲词。他起身推窗，一阵花香扑面而来，院中丫鬟们已开始忙碌。袭人端着洗漱用具进来，见宝玉怔怔出神，轻声道："二爷，今日老太太说要在园中摆宴，请姑娘们一起赏花呢。"宝玉闻言，眼中顿时亮了起来，大观园中众姐妹齐聚，实乃人生乐事。他匆匆梳洗，换上一件银红袄儿，便往贾母处去了。',
        choices: [
            { text: '先去潇湘馆看望黛玉', next: 'baoyu_ch1_02a', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.emotion': { add: 1 } } },
            { text: '直接去贾母处赴宴', next: 'baoyu_ch1_02b', effects: { 'relationships.jiamu': { add: 3 } } },
            { text: '在怡红院中写咏海棠诗', next: 'baoyu_ch1_02c', effects: { 'attributes.talent': { add: 2 } } }
        ]
    },
    baoyu_ch1_02a: {
        id: 'baoyu_ch1_02a', chapter: 1, title: '潇湘访玉',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '宝玉沿着曲径来到潇湘馆前，只见千竿翠竹在晨风中轻轻摇曳，凤尾森森，龙吟细细。他轻手轻脚走进院中，却见黛玉正坐在窗前，手执诗卷，眉间微蹙。紫鹃从内室出来，见是宝玉，便笑道："二爷来得正好，姑娘正念叨着呢。"黛玉闻声抬头，嗔道："谁念叨你了？少往自己脸上贴金。"话虽如此，嘴角却微微上扬。宝玉在她身旁坐下，见案上摊着一张素笺，上面写着几行清秀的小字，似是新作的诗稿。他凑近去看，黛玉却一把按住，红着脸道："不许看！还没写完呢。"',
        choices: [
            { text: '温柔请求一睹诗稿', next: 'baoyu_ch1_03a', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.charm': { add: 1 } } },
            { text: '笑着说陪你说说话', next: 'baoyu_ch1_03b', effects: { 'relationships.ldaiyu': { add: 3 }, 'attributes.emotion': { add: 1 } } }
        ]
    },
    baoyu_ch1_02b: {
        id: 'baoyu_ch1_02b', chapter: 1, title: '荣庆堂赴宴',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉来到荣庆堂时，贾母已在堂上端坐，众姐妹亦陆续到来。王熙凤正指挥下人摆设席面，见宝玉来了，笑道："宝兄弟来得倒早，今日可要多吃几杯。"贾母见了宝玉，满脸堆笑，招手道："我的心肝，快过来坐我身边。"宝玉依言坐在贾母身旁，环顾四周，只见宝钗端庄而坐，湘云笑闹不停，迎春、探春、惜春三姐妹亦各安其位。唯有黛玉尚未到来，宝玉心中不免牵挂。',
        choices: [
            { text: '坦然承认在等黛玉', next: 'baoyu_ch1_03d', effects: { 'relationships.ldaiyu': { add: 3 } } },
            { text: '与湘云说笑', next: 'baoyu_ch1_03e', effects: { 'relationships.shi_xiangyun': { add: 5 } } },
            { text: '向宝钗寒暄', next: 'baoyu_ch1_03f', effects: { 'relationships.xbaochai': { add: 3 } } }
        ]
    },
    baoyu_ch1_02c: {
        id: 'baoyu_ch1_02c', chapter: 1, title: '怡红咏海棠',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '宝玉独坐窗前，望着院中海棠出神。那海棠开得正盛，一树繁花如锦似霞。他心中诗意涌动，研墨铺纸，提笔写道："秋容浅淡映重门，七节攒成雪满盆。出浴太真冰作影，捧心西子玉为魂。"写至"玉为魂"三字，笔锋一顿，心中忽然浮现黛玉的身影——她何尝不是如西子般捧心蹙眉？又想起宝钗的端庄如太真出浴，一时心绪纷乱，竟不知如何续写下去。',
        choices: [
            { text: '将诗稿收起，去赴宴', next: 'baoyu_ch1_02b', effects: { 'attributes.talent': { add: 1 } } },
            { text: '带着诗稿去找黛玉品评', next: 'baoyu_ch1_02a', effects: { 'relationships.ldaiyu': { add: 3 } } }
        ]
    },
    baoyu_ch1_03a: {
        id: 'baoyu_ch1_03a', chapter: 1, title: '诗心相许',
        scene: 'xiaoxiang_guan', speaker: '林黛玉',
        text: '黛玉见宝玉目光温柔，心中一软，缓缓松开了按住诗稿的手。宝玉低头细看，只见上面写道："半卷湘帘半掩门，碾冰为土玉为盆。偷来梨蕊三分白，借得梅花一缕魂。"宝玉读罢，拍案叫绝："好一个借得梅花一缕魂！林妹妹的诗，真真是从天上掉下来的。"黛玉红了脸，轻声道："不过是胡诌的，你倒夸上了天。"两人相视而笑，竹影摇曳间，似有千言万语尽在不言中。',
        choices: [
            { text: '一起去赴宴', next: 'baoyu_ch1_06', effects: { 'relationships.ldaiyu': { add: 3 } } },
            { text: '约定日后共组诗社', next: 'baoyu_ch1_06', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.talent': { add: 2 }, 'flags.poetry_club_idea': { set: true } } }
        ]
    },
    baoyu_ch1_03b: {
        id: 'baoyu_ch1_03b', chapter: 1, title: '竹下闲话',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '黛玉闻言，眼中闪过一丝感动，却故作不在意道："你倒会说话，只怕见了旁人也是这般。"宝玉急道："林妹妹，你明知我心中只有——"话未说完，忽听院外传来湘云的笑声："爱哥哥！林姐姐！你们躲在这里说什么悄悄话呢？"黛玉连忙推开宝玉，红着脸坐正了身子。湘云大大咧咧地走进来，拉着宝玉道："老太太叫人找你呢，快去罢！"',
        choices: [
            { text: '路上与湘云说笑', next: 'baoyu_ch1_06', effects: { 'relationships.shi_xiangyun': { add: 3 } } },
            { text: '心中仍记挂黛玉', next: 'baoyu_ch1_06', effects: { 'relationships.ldaiyu': { add: 3 } } }
        ]
    },
    baoyu_ch1_03d: {
        id: 'baoyu_ch1_03d', chapter: 1, title: '坦白心事',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉坦然道："林妹妹还没来，我自然是要等她的。"满座皆笑。凤姐拍手道："我就知道！宝兄弟的心里，只有林妹妹一个人。"宝钗面色微变，旋即恢复如常。贾母笑道："宝玉这孩子，倒是个有良心的。"正说着，黛玉已到了门口，一袭淡绿衣裳，如翠竹临风。她见众人目光齐聚，面上飞起一片红晕，轻声道："老太太安。"',
        choices: [
            { text: '为黛玉让出身边的好位置', next: 'baoyu_ch1_06', effects: { 'relationships.ldaiyu': { add: 5 } } },
            { text: '注意到宝钗的异样', next: 'baoyu_ch1_06', effects: { 'relationships.xbaochai': { add: 3 } } }
        ]
    },
    baoyu_ch1_03e: {
        id: 'baoyu_ch1_03e', chapter: 1, title: '与云说笑',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉转向湘云，笑道："云妹妹，你几时来的？"湘云大咧咧道："我来还要通报？"说着便拉着宝玉说起了近日在史家的趣事。她说话时咬舌，将"二"说成"爱"，听得宝玉忍俊不禁。湘云佯怒道："爱哥哥你再笑我，我可要恼了！"宝玉连忙赔不是，二人笑闹间，宝钗在一旁静静看着，嘴角含笑。',
        choices: [
            { text: '提议行酒令助兴', next: 'baoyu_ch1_06', effects: { 'attributes.charm': { add: 2 } } },
            { text: '询问探春的新诗', next: 'baoyu_ch1_06', effects: { 'relationships.tanchun': { add: 3 } } }
        ]
    },
    baoyu_ch1_03f: {
        id: 'baoyu_ch1_03f', chapter: 1, title: '宝钗寒暄',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉走到宝钗面前，笑道："宝姐姐，好久不见了。"宝钗起身还礼，端庄道："宝兄弟安好。近日可还在读那些闲书？"宝玉讪讪道："姐姐又来说我了。"宝钗微微一笑。恰在此时，宝钗颈上的金锁露了出来，宝玉不由得多看了一眼，只见上面刻着"不离不弃，芳龄永继"八个字。',
        choices: [
            { text: '细看金锁，询问来历', next: 'baoyu_ch1_06', effects: { 'relationships.xbaochai': { add: 3 }, 'flags.seen_gold_lock': { set: true } } },
            { text: '转去与姐妹们说笑', next: 'baoyu_ch1_06', effects: { 'attributes.emotion': { add: 1 } } }
        ]
    },
    baoyu_ch1_06: {
        id: 'baoyu_ch1_06', chapter: 1, title: '宴散夜思',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '宴席散后，宝玉回到怡红院，夜色已深。月光如水，洒在海棠花上。他独坐窗前，回想今日种种：黛玉的诗才与多情，宝钗的端庄与金锁之谜，湘云的豪爽，探春的才干……他虽身在富贵之中，却隐隐感到一种说不清的忧虑。袭人端来安神汤，劝他早些歇息。宝玉接过汤碗，忽然问道："袭人，你说人活一世，最要紧的是什么？"袭人愣了愣，道："自然是平安喜乐，读书上进。"宝玉摇头道："你不懂。"',
        choices: [
            { text: '安然入睡', next: 'baoyu_ch2_01', effects: { 'attributes.health': { add: 1 } } },
            { text: '起身写日记', next: 'baoyu_ch2_01', effects: { 'attributes.talent': { add: 1 } } }
        ]
    },
    baoyu_orig_01: { id: 'baoyu_orig_01', chapter: 1, title: '共读西厢', scene: 'yihong_yuan', speaker: '旁白', text: '那日午后，宝玉从书房偷得一本《西厢记》，如获至宝。他躲进怡红院后花园的桃花树下，正看得入迷，忽听身后有人笑道："什么好书，让二爷看得如此出神？"宝玉一惊，回头竟是黛玉。他慌忙将书藏到身后，黛玉却已瞥见封面，眼中闪过一丝好奇："莫非是……"宝玉见瞒不过，便将书递给她，道："这是禁书，你切不可告诉别人。"黛玉接过书，翻开几页，越看越是入迷，脸颊渐渐泛起红晕。\n\n"花落水流红，闲愁万种，无语怨东风。"\n\n两人并肩坐在桃花树下，一同读着那本被世人视为"淫词艳曲"的书。读到张生跳墙相会时，黛玉嗔道："这书果然不是正经书！"嘴上虽这么说，眼睛却舍不得离开书页。宝玉看着她微红的侧脸，心中涌起一股从未有过的悸动——这世间，原来还有一个人与自己一样，懂得欣赏这些被禁止的美好。', textVariations: [{ conditions: { 'relationships.ldaiyu': { min: 40 } }, text: '那日午后，宝玉从书房偷得一本《西厢记》，躲在桃花树下阅读。黛玉不知何时来到他身后，轻声道："好一个落花流水红，闲愁万种。"宝玉回头，正撞上她含笑的目光。四目相对，桃花纷飞，时光仿佛在这一刻静止了。"' }], choices: [{ text: '与黛玉讨论书中情节', next: 'baoyu_orig_02', effects: { 'relationships.ldaiyu': { add: 6 }, 'attributes.talent': { add: 2 }, 'attributes.emotion': { add: 3 } } }, { text: '将书借给黛玉独自品读', next: 'baoyu_orig_03', effects: { 'relationships.ldaiyu': { add: 4 }, 'attributes.wisdom': { add: 1 } } }] },
    baoyu_orig_02: { id: 'baoyu_orig_02', chapter: 1, title: '桃花盟誓', scene: 'garden_path', speaker: '旁白', text: '两人读罢《西厢》，黛玉忽然轻叹道："张生与崔莺莺，终究是有情人终成眷属。"宝玉心中一动，鼓起勇气道："林妹妹，若我也能像张生那样……"黛玉脸更红了，嗔道："你又胡说了！谁要学那些痴男怨女？"然而她的嘴角却微微上扬。宝玉握住她的手，郑重道："不管别人怎么说，我这辈子，只认你一个人。"黛玉的眼眶红了，她低下头，声音细若蚊蚋："傻子……"', choices: [{ text: '进一步表明心迹', next: 'baoyu_orig_04', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 3 }, 'flags.xixiang_confess': true } }, { text: '点到为止，留有余地', next: 'baoyu_orig_05', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_orig_03: { id: 'baoyu_orig_03', chapter: 1, title: '西厢余韵', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝玉将《西厢》借给了黛玉。数日后他去潇湘馆，见黛玉正伏案书写，便悄悄走到她身后。黛玉察觉后慌忙遮掩，却已被宝玉看到纸上写着："芳心一点玉壶冰，不染尘寰半点尘。"宝玉赞道："好诗！妹妹竟从《西厢》中悟出了这般境界？"黛玉脸一红，道："不过是随手写的，不许笑话。"宝玉认真道："我怎会笑话？你的诗，每一句我都想背下来。"', choices: [{ text: '以诗传情', next: 'baoyu_orig_04', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.talent': { add: 2 } } }, { text: '默默守护', next: 'baoyu_orig_05', effects: { 'attributes.emotion': { add: 2 } } }] },
    baoyu_orig_04: { id: 'baoyu_orig_04', chapter: 2, title: '木石前盟', scene: 'wufeng_bridge', speaker: '旁白', text: '自那日共读《西厢》之后，宝玉与黛玉之间的情意更加深厚。两人在沁芳桥畔散步，宝玉忽然停下脚步，望着桥下的流水道："林妹妹，你可相信前世今生？"黛玉愣了一下，轻声道："你说呢？"宝玉认真道："我相信。我觉得我们从前一定见过，不然为何初见你时，我便觉得……觉得好像认识了很久很久？"黛玉的眼眶微微泛红，低声道："我也是……"风过竹林，两人的手在袖中轻轻相触。', choices: [{ text: '继续倾诉衷肠', next: 'baoyu_ch2_01', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.emotion': { add: 3 } } }, { text: '将这份心意藏在心底', next: 'baoyu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_orig_05: { id: 'baoyu_orig_05', chapter: 2, title: '金玉之说', scene: 'hengwu_yuan', speaker: '旁白', text: '那日宝钗病了，宝玉去蘅芜苑探望。宝钗躺在床上，面色苍白却依然端庄。她无意间露出锁骨上的金锁，宝玉凑近一看，上面刻着"不离不弃，芳龄永继"八个字。宝钗道："这是癞头和尚给的，说要有玉的方可配。"宝玉摸着自己通灵宝玉上的字——"莫失莫忘，仙寿恒昌"——心中猛然一震：这不正是天生一对？\n\n回怡红院的路上，宝玉心中翻涌不已。一边是黛玉清澈如水的眼眸，一边是宝钗温润如玉的金锁。他究竟该何去何从？', choices: [{ text: '将此事告诉黛玉', next: 'baoyu_orig_06', effects: { 'relationships.ldaiyu': { add: 3 }, 'attributes.charm': { add: -1 }, 'flags.gold_jade_revealed': true } }, { text: '压在心底，不让任何人知道', next: 'baoyu_orig_07', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '向宝钗表明态度', next: 'baoyu_orig_08', effects: { 'relationships.xbaochai': { add: 3 }, 'flags.clear_with_baochai': true } }] },
    baoyu_orig_06: { id: 'baoyu_orig_06', chapter: 2, title: '黛玉闻讯', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝玉将金锁之事告诉了黛玉。黛玉听完，沉默良久，忽然笑了——那笑容中带着三分苦涩、七分凄凉。她轻声道："原来如此……难怪人人都说你们是金玉良缘。"宝玉急道："我只认木石前盟，不认什么金玉良缘！"黛玉摇摇头，转过身去，肩头微微颤抖。宝玉想去拉她的手，却被紫鹃拦住："二爷，姑娘需要静一静。"', choices: [{ text: '在门外守候，等她想通了再说话', next: 'baoyu_orig_09', effects: { 'attributes.emotion': { add: 2 }, 'attributes.wisdom': { add: 1 } } }, { text: '强行进去解释', next: 'baoyu_orig_10', effects: { 'attributes.emotion': { add: 3 }, 'attributes.health': { add: -1 } } }] },
    baoyu_orig_07: { id: 'baoyu_orig_07', chapter: 2, title: '心事暗藏', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉将金锁之事压在了心底。然而这件事像一根刺，时不时地扎他一下。每当看到宝钗的金锁在阳光下闪闪发光，他的心就会莫名地揪紧；而每当看到黛玉忧郁的眼神，他又感到深深的愧疚。\n\n袭人看出了他的异样，问道："二爷最近怎么了？总是心不在焉的。"宝玉苦笑："有些事，不知道该怎么处理。"袭人意味深长地看着他："有些事，拖得越久，越难处理。"', choices: [{ text: '最终决定向黛玉坦白', next: 'baoyu_orig_06', effects: { 'attributes.emotion': { add: 1 } } }, { text: '继续隐瞒，走一步看一步', next: 'baoyu_ch2_01', effects: { 'attributes.wisdom': { add: 1 } } }] },
    baoyu_orig_08: { id: 'baoyu_orig_08', chapter: 2, title: '宝钗面前', scene: 'hengwu_yuan', speaker: '旁白', text: '宝玉找到宝钗，郑重地道："宝姐姐，我知道你的金锁和我的玉是一对儿。但是……我的心，已经给了别人。"宝钗脸上的笑容凝固了一瞬，随即恢复了平静。她淡淡道："我明白。金玉之说，不过是外人的闲话罢了。你不必放在心上。"然而当宝玉转身离去时，宝钗低头看着自己的金锁，眼中闪过一丝不易察觉的失落。\n\n"好风凭借力，送我上青云"——可若那风不肯来呢？', choices: [{ text: '回到大观园', next: 'baoyu_ch2_01', effects: { 'attributes.emotion': { add: 1 }, 'attributes.wisdom': { add: 1 } } }] },
    baoyu_orig_09: { id: 'baoyu_orig_09', chapter: 2, title: '潇湘夜候', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝玉在潇湘馆门外守候了整整一个时辰。天色渐暗，雨丝飘落。紫鹃出来道："二爷，回去吧，姑娘说要一个人静静。"宝玉摇头："我不走。我要等她愿意见我为止。"又过了半个时辰，房门终于开了。黛玉站在门口，眼眶微红，轻声道："进来吧……傻子。"\n\n屋内烛火昏黄，黛玉为宝玉倒了一杯茶，低声道："我不是怪你……我只是害怕。"宝玉握住她的手："怕什么？"黛玉抬起头，目光中满是脆弱："怕这一切都是梦……怕醒来后，什么都不剩了。"', choices: [{ text: '给她最坚定的承诺', next: 'baoyu_orig_11', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 4 } } }, { text: '用行动代替言语', next: 'baoyu_orig_11', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_orig_10: { id: 'baoyu_orig_10', chapter: 2, title: '强闯潇湘', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝玉不顾紫鹃阻拦，强行推门进入潇湘馆。黛玉背对着他站在窗前，肩膀微微颤抖。宝玉上前一步，道："林妹妹，你听我说——"黛玉猛然转身，泪流满面："你走！我现在不想见任何人！"宝玉愣住了——他从未见过黛玉如此失控的样子。紫鹃在一旁哭着道："二爷，您快走吧！姑娘身子不好，经不起这样折腾！"\n\n宝玉看着黛玉苍白的脸色和颤抖的双唇，心中悔恨交加。他不该这么鲁莽。', choices: [{ text: '道歉后退出，改日再来', next: 'baoyu_orig_09', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.emotion': { add: -1 } } }, { text: '坚持留下陪伴', next: 'baoyu_orig_09', effects: { 'attributes.emotion': { add: 2 }, 'attributes.health': { add: -1 } } }] },
    baoyu_orig_11: { id: 'baoyu_orig_11', chapter: 2, title: '题帕定情', scene: 'xiaoxiang_guan', speaker: '旁白', text: '那一夜，两人在灯下说了许多话。临别时，宝玉解下自己的一方旧帕子，递给黛玉。黛玉不解："这是做什么？"宝玉认真道："这是我贴身用的帕子，你收着它，就像我一直陪在你身边一样。"黛玉接过帕子，感到上面还带着他的体温。她低头沉默许久，忽然提笔在帕子上写下三首绝句——\n\n"眼空蓄泪泪空垂，暗洒闲抛却为谁？"\n\n"尺幅鲛绡劳惠赠，叫人焉得不伤悲？"\n\n"抛珠滚玉只偷潦，镇日无心镇日闲。"\n\n"枕上袖边犹拭痕，任他点点与斑斑。"\n\n写完，她将帕子叠好，珍重收入怀中。这一方小小的帕子，承载了两人的全部心意。', textVariations: [{ conditions: { 'relationships.ldaiyu': { min: 55 } }, text: '那一夜，两人在灯下说了许多话。宝玉解下贴身旧帕交给黛玉，黛玉提笔题下三首绝句——字字泣血，句句含情。这不是普通的题帕，而是两个灵魂最深处的共鸣。黛玉将帕子贴在胸口，轻声道："我会一直留着它，直到……直到生命的最后一刻。"' }], choices: [{ text: '继续前往诗社', next: 'baoyu_ch2_01', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.talent': { add: 3 }, 'flags.evt_xixiang_confess': true, 'flags.handkerchief_poem': true } }] },

    baoyu_beat_01: { id: 'baoyu_beat_01', chapter: 2, title: '琪官之祸', scene: 'rongguo_hall', speaker: '旁白', text: '那日忠顺王府长史官来贾府找人，指名道姓要找"琪官"蒋玉菡。贾政大怒，质问宝玉是否与他来往。宝玉起初还想抵赖，却被长史官拿出一件茜香罗汗巾——那是宝玉与蒋玉菡交换的信物。贾政气得浑身发抖，喝令家丁将宝玉按在凳子上，亲自取过大板，狠狠打了下去。\n\n板子一下一下落在身上，痛彻骨髓。宝玉咬紧牙关，一声不吭。他知道自己错了——可他不后悔认识蒋玉菡，那个唱戏的男子，有着比许多达官贵人更高贵的灵魂。', textVariations: [{ conditions: { 'attributes.fortune': { max: 3 } }, text: '忠顺王府的人来得猝不及防。贾政盛怒之下，取过大板便打。宝玉被打得皮开肉绽，却始终一声不吭。他想：这大概就是命吧？偏偏在这个时候被人告发，偏偏父亲今日心情不好……他闭上眼，任由疼痛席卷全身。' }], choices: [{ text: '咬牙忍住，不求饶', next: 'baoyu_beat_02', effects: { 'attributes.emotion': { add: 2 }, 'attributes.health': { add: -3 }, 'flags.beat_silent': true } }, { text: '开口求饶', next: 'baoyu_beat_02', effects: { 'attributes.wisdom': { add: 1 }, 'attributes.emotion': { add: -1 } } }, { text: '试图辩解', next: 'baoyu_beat_02b', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_beat_02: { id: 'baoyu_beat_02', chapter: 2, title: '遍体鳞伤', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉被抬回怡红院时，已是下半身血肉模糊。袭人哭着为他上药，晴雯在一旁急得直掉眼泪。王夫人来了，看了宝玉的伤势，也忍不住落泪。贾母更是心疼得直跺脚："这老杀才！打坏了我的宝玉，我和他没完！"\n\n宝玉躺在床上，动弹不得。他望向窗外——窗外是通往潇湘馆的方向。黛玉现在还不知道这事吧？若是知道了，不知又要哭成什么样……', choices: [{ text: '派人通知黛玉', next: 'baoyu_beat_03', effects: { 'relationships.ldaiyu': { add: 3 } } }, { text: '不想让她担心，先瞒着', next: 'baoyu_beat_04', effects: { 'attributes.wisdom': { add: 1 } } }] },
    baoyu_beat_02b: { id: 'baoyu_beat_02b', chapter: 2, title: '据理力争', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉开口道："父亲，蒋玉菡不过是一个唱戏的，孩儿与他交往，不过是欣赏他的才艺，并无不当之处！"贾政更加愤怒："混账东西！你与戏子厮混，成何体统？还要强词夺理！"说着又是一顿狠打。但宝玉的话也传到了在场其他人的耳中，连一向严厉的贾政，打完后也不免有些恍惚——这孩子说的话，似乎也不是全无道理……', choices: [{ text: '被抬回怡红院', next: 'baoyu_beat_02', effects: { 'attributes.health': { add: -4 }, 'attributes.wisdom': { add: 2 }, 'flags.beat_defended': true } }] },
    baoyu_beat_03: { id: 'baoyu_beat_03', chapter: 2, title: '黛玉探伤', scene: 'yihong_yuan', speaker: '旁白', text: '消息还是传到了黛玉耳中。她跌跌撞撞地跑来怡红院，推开门的那一刻，看到宝玉躺在床上的样子，眼泪瞬间夺眶而出。宝玉勉强笑了笑："林妹妹，你怎么哭了？我没事。"黛玉哽咽道："你还说没事……都打成这样了……"她坐在床边，轻轻握住他未受伤的手，泪水滴落在他的掌心。\n\n"你知不知道，我有多担心……"她的声音颤抖着，"若是你有个三长两短，我也不活了。"', choices: [{ text: '安慰黛玉', next: 'baoyu_beat_05', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 4 } } }, { text: '与她约定以后不再冒险', next: 'baoyu_beat_05', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_beat_04: { id: 'baoyu_beat_04', chapter: 2, title: '瞒天过海', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉决定暂时瞒着黛玉。然而第二天，黛玉还是来了——她是来送药的。她一眼就看出宝玉受了重伤，脸色瞬间变得苍白。她没有哭，只是静静地坐下来，开始为他熬药。药香弥漫在整个房间，黛玉的动作很慢、很仔细，仿佛要将所有的担忧都熬进这碗药里。\n\n宝玉看着她的背影，心中既愧疚又温暖。他知道，这个女子，是用整个生命在爱着他。', choices: [{ text: '向她坦白一切', next: 'baoyu_beat_03', effects: { 'relationships.ldaiyu': { add: 5 } } }, { text: '接受她的照顾，心存感激', next: 'baoyu_beat_05', effects: { 'attributes.emotion': { add: 2 } } }] },
    baoyu_beat_05: { id: 'baoyu_beat_05', chapter: 2, title: '伤后感悟', scene: 'yihong_yuan', speaker: '旁白', text: '养伤期间，宝玉想了很多。父亲的责打让他明白了一个道理：在这贾府之中，他的一举一动都被无数双眼睛盯着。他想要保护的人——黛玉、晴雯、袭人……他们都因为与他有关联而处于危险之中。\n\n"我是不是太自私了？"他问自己，"为了自己的快乐，让他们都跟着担惊受怕？"\n\n然而当他想起黛玉含泪的眼睛，他又觉得——不，保护他们，恰恰是他活着的意义。只是他需要变得更强大、更聪明才行。', choices: [{ text: '决心变强，守护所爱之人', next: 'baoyu_ch2_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 2 }, 'flags.protect_vow': true } }] },

    baoyu_gold_01: { id: 'baoyu_gold_01', chapter: 2, title: '摔玉明志', scene: 'yihong_yuan', speaker: '旁白', text: '那日众人聚在一起说起"金玉良缘"，黛玉听了脸色苍白，转身便走。宝玉追上去，却被众人拦住。回到怡红院后，宝玉越想越气，忽然一把抓下脖子上的通灵宝玉，狠狠摔在地上！\n\n"什么劳什子！什么金玉良缘！我偏不要这东西！"\n\n玉石落地，发出清脆的声响。满屋丫鬟婆子吓得面无人色，袭人更是哭喊着扑过去捡起宝玉。宝玉喘着粗气，眼中满是倔强——他要用自己的方式，证明他对黛玉的心意。', textVariations: [{ conditions: { 'attributes.emotion': { min: 9 } }, text: '那日众人说起"金玉良缘"，黛玉听了转身就走。宝玉追出去不成，回来后越想越恨。他一把扯下通灵宝玉，狠狠摔在地上！玉石碎裂的声音在屋中回荡。袭人吓得尖叫起来，晴雯却怔怔地看着他——她从未见过二爷如此失控的样子。宝玉的眼中燃烧着火焰："我不要什么金玉良缘！我只要林妹妹！"' }], choices: [{ text: '坚持己见，不后悔', next: 'baoyu_gold_02', effects: { 'attributes.emotion': { add: 3 }, 'relationships.ldaiyu': { add: 5 }, 'flags.jade_broken': true } }, { text: '事后有些懊悔', next: 'baoyu_gold_03', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_gold_02: { id: 'baoyu_gold_02', chapter: 2, title: '黛玉闻讯', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝玉摔玉的消息很快传遍了整个大观园。黛玉听到后，整个人僵住了。紫鹃急道："姑娘，二爷为你摔了玉！"黛玉的眼泪无声地滑落——她知道这意味着什么。宝玉用最激烈的方式，否定了"金玉良缘"，肯定了"木石前盟"。可是……这样做值得吗？他会不会因此受到更重的惩罚？\n\n她连夜写了一封信，托紫鹃送去怡红院。信上只有八个字："你好傻……我好怕。"', choices: [{ text: '回信安抚黛玉', next: 'baoyu_gold_04', effects: { 'relationships.ldaiyu': { add: 6 }, 'attributes.emotion': { add: 3 } } }, { text: '亲自去潇湘馆解释', next: 'baoyu_gold_04', effects: { 'attributes.emotion': { add: 2 }, 'attributes.health': { add: -1 } } }] },
    baoyu_gold_03: { id: 'baoyu_gold_03', chapter: 2, title: '事后悔悟', scene: 'yihong_yuan', speaker: '旁白', text: '摔完玉后，宝玉冷静下来，不免有些后怕。这块玉是他的命根子，若真摔坏了，后果不堪设想。袭人小心翼翼地将玉捧给他，宝玉接过来，摩挲着上面的纹路，心中五味杂陈。\n\n"我这样做，真的对吗？"他问自己。一面是对黛玉的心意，一面是家族的责任……这两者之间，难道就没有一条可以共存的路吗？', choices: [{ text: '寻找两全之法', next: 'baoyu_gold_04', effects: { 'attributes.wisdom': { add: 3 } } }, { text: '坚持到底，不退缩', next: 'baoyu_gold_04', effects: { 'attributes.emotion': { add: 2 } } }] },
    baoyu_gold_04: { id: 'baoyu_gold_04', chapter: 2, title: '风波暂平', scene: 'daguan_yuan_gate', speaker: '旁白', text: '摔玉的风波最终在贾母的干预下平息了。贾母训斥了宝玉一顿，又命人好生看管那块玉。但这件事的影响远未结束——"金玉良缘"的说法从此在府中成了禁忌，没人敢再当面提起。\n\n然而暗地里，关于"木石前盟"与"金玉良缘"的议论反而更多了。宝玉知道，这场较量才刚刚开始。', choices: [{ text: '继续前往诗社', next: 'baoyu_ch2_01', effects: { 'attributes.wisdom': { add: 1 } } }] },

    baoyu_jinchuan_01: { id: 'baoyu_jinchuan_01', chapter: 2, title: '金钏之死', scene: 'rongguo_hall', speaker: '旁白', text: '那日宝玉去给王夫人请安，恰好金钏在旁伺候。王夫人睡着后，金钏与宝玉说了几句玩笑话，不料被王夫人听见。王夫人大怒，当场打了金钏一巴掌，将她撵了出去。\n\n几天后传来噩耗——金钏投井自尽了。\n\n宝玉得知消息后，整个人如遭雷击。他记得金钏给他喂胭脂时的笑脸，记得她说"你若喜欢，我天天给你吃"时的娇嗔……这样一个鲜活的生命，就这样没了？而且是因为他！', textVariations: [{ conditions: { 'attributes.emotion': { min: 7 } }, text: '金钏死了。投井自尽。宝玉听到这个消息时，手中的茶杯"啪"的一声掉在地上。他想起金钏喂他吃胭脂时的情景，想起她含羞带笑的眼神……所有的一切，都成了永远无法挽回的回忆。他的双腿发软，几乎站立不住。' }], choices: [{ text: '偷偷去祭奠金钏', next: 'baoyu_jinchuan_02', effects: { 'attributes.emotion': { add: 3 }, 'attributes.wisdom': { add: 1 }, 'flags.mourned_jinchuan': true } }, { text: '压抑悲痛，装作无事', next: 'baoyu_jinchuan_03', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.emotion': { add: -2 } } }] },
    baoyu_jinchuan_02: { id: 'baoyu_jinchuan_02', chapter: 2, title: '井边祭奠', scene: 'garden_path', speaker: '旁白', text: '趁着夜色，宝玉偷偷来到了金钏投井的地方。他在井边摆上了几朵白花，又倒了一杯清酒。对着幽深的井口，他轻声道："金钏姐姐，是我害了你……我对不起你。"风吹过，井水泛起涟漪，仿佛有人在回应他。\n\n"若有来世，愿你投个好人家，再也不必受这样的委屈。"\n\n他站起身，望着天上的月亮，心中暗暗发誓：从今往后，他一定要保护好身边的每一个人，再也不能让悲剧重演。', choices: [{ text: '返回大观园', next: 'baoyu_ch2_01', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.emotion': { add: 1 } } }] },
    baoyu_jinchuan_03: { id: 'baoyu_jinchuan_03', chapter: 2, title: '隐忍不发', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉将金钏之死的悲痛深深埋进了心底。表面上，他依旧嘻嘻哈哈，与姐妹们吟诗作对；只有夜深人静时，他会想起那张含笑的脸，想起那句"你若喜欢，我天天给你吃"。\n\n袭人注意到了他的异样，小心翼翼地问："二爷，你是不是有什么心事？"宝玉摇摇头："没什么。"但他知道，这件事将成为他心中永远的疤痕——提醒他，这个世界有多么残酷，而他有多么无力。', choices: [{ text: '继续前行', next: 'baoyu_ch2_01', effects: { 'attributes.wisdom': { add: 1 }, 'attributes.emotion': { add: -1 } } }] },

    baoyu_ch2_01: {
        id: 'baoyu_ch2_01', chapter: 2, title: '海棠诗社',
        scene: 'qiushuang_zhai', speaker: '旁白',
        text: '次日，探春发帖邀众姐妹起社。众人各取雅号：探春"蕉下客"，黛玉"潇湘妃子"，宝钗"蘅芜君"，湘云"枕霞旧友"，宝玉"绛洞花主"，李纨"稻香老农"。探春道："今日以海棠为题，各作七律一首，以定高下。"众人研墨铺纸，各展才情。',
        textVariations: [
            { conditions: { 'attributes.talent': { min: 8 } }, text: '次日，探春发帖邀众姐妹起社。众人各取雅号：探春"蕉下客"，黛玉"潇湘妃子"，宝钗"蘅芜君"，湘云"枕霞旧友"，宝玉"绛洞花主"，李纨"稻香老农"。探春道："今日以海棠为题。"你才思泉涌，提笔便成——"半卷湘帘半掩门，碾冰为土玉为盆。"黛玉看了你的诗，眼中闪过一丝惊讶与赞赏。"宝兄弟今日的诗，倒有几分真意了。"' },
            { conditions: { 'attributes.emotion': { min: 8 } }, text: '次日，探春发帖邀众姐妹起社。你望着满园春色，心中却翻涌着难以言说的情绪——这大观园中的繁华，能持续多久？黛玉见你出神，轻声道："想什么呢？该你了。"你回过神来，勉强笑了笑。"' },
            { conditions: { 'attributes.health': { max: 4 } }, text: '次日，探春发帖邀众姐妹起社。你本不想去，但想到黛玉会失望，还是强撑着去了。诗社上，你感到一阵阵眩晕，手中的笔似乎比平时重了许多。袭人悄悄拉了拉你的衣袖，低声道："二爷若不舒服，先回去歇着吧。"' }
        ],
        choices: [
            { text: '全力以赴，认真作诗', next: 'baoyu_ch2_02', effects: { 'attributes.talent': { add: 3 } } },
            { text: '随意挥洒，不拘一格', next: 'baoyu_ch2_02', effects: { 'attributes.charm': { add: 2 } } }
        ]
    },
    baoyu_ch2_02: {
        id: 'baoyu_ch2_02', chapter: 2, title: '诗社品评',
        scene: 'qiushuang_zhai', speaker: '旁白',
        text: '李纨逐一品评众人诗作。她道："若论风流别致，当属潇湘妃子；若论含蓄浑厚，当属蘅芜君。我评蘅芜君第一，潇湘妃子第二。"黛玉虽有些不服，却也知宝钗之作确有大家气象。宝玉之作被评为末等，他笑道："我本就不善此道，能凑成一首已是不易。"众人皆笑，诗社之兴，由此而起。',
        choices: [
            { text: '安慰黛玉', next: 'baoyu_ch2_03', effects: { 'relationships.ldaiyu': { add: 5 } } },
            { text: '向宝钗请教', next: 'baoyu_ch2_03', effects: { 'relationships.xbaochai': { add: 3 } } }
        ]
    },
    baoyu_ch2_03: {
        id: 'baoyu_ch2_03', chapter: 2, title: '沁芳桥畔',
        scene: 'wufeng_bridge', speaker: '旁白',
        text: '诗社散后，宝玉独自走到沁芳桥上。桥下流水潺潺，落花逐水而去。他想起黛玉葬花时的模样，心中感慨万千。忽然身后传来脚步声，回头一看，竟是宝钗。宝钗笑道："宝兄弟，一个人在此发什么呆？"宝玉道："我在想，这落花随水而去，不知流向何方。"宝钗道："落花有意随流水，流水无心恋落花——世间事，大抵如此。"',
        choices: [
            { text: '反驳：情之所至，金石为开', next: 'baoyu_ch2_04', effects: { 'attributes.emotion': { add: 2 } } },
            { text: '沉默不语，心中若有所思', next: 'baoyu_ch2_04', effects: { 'attributes.wisdom': { add: 2 } } }
        ]
    },
    baoyu_ch2_04: {
        id: 'baoyu_ch2_04', chapter: 2, title: '怡红夜话',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '入夜，晴雯端来茶水，见宝玉闷闷不乐，便道："二爷又怎么了？今日诗社不是玩得好好的？"宝玉叹道："你们不懂，这大观园中的姐妹们，个个都是好的，可我总觉得……"晴雯截口道："你呀，就是想太多！今朝有酒今朝醉，管他明日如何！"宝玉被她一激，倒笑了出来。恰在此时，袭人从王夫人处回来，面色有些凝重。她将宝玉拉到一旁，低声道："二爷，太太今日问了我好些话……"',
        choices: [
            { text: '追问袭人太太说了什么', next: 'baoyu_ch2_05', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '不以为意，继续与晴雯说笑', next: 'baoyu_ch2_05', effects: { 'attributes.emotion': { add: 1 } } }
        ]
    },
    baoyu_ch2_05: {
        id: 'baoyu_ch2_05', chapter: 2, title: '暗流涌动',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '袭人告诉宝玉，王夫人近日对大观园中的丫鬟们颇为不满，尤其对晴雯的"轻狂"颇有微词。袭人道："太太的意思是，让我多留心着些。"宝玉心中一紧，他知道王夫人一旦动了念头，晴雯便危险了。他看着窗外月光下摇曳的竹影，暗暗下定决心——他必须想办法保护身边的人。',
        choices: [
            { text: '暗中保护晴雯', next: 'baoyu_ch3_01', effects: { 'relationships.qingwen': { add: 3 }, 'attributes.wisdom': { add: 1 } } },
            { text: '求贾母庇护', next: 'baoyu_ch3_01', effects: { 'relationships.jiamu': { add: 2 }, 'attributes.wisdom': { add: 2 } } },
            { text: '不以为意，认为不会出大事', next: 'baoyu_ch3_01', effects: { 'attributes.emotion': { add: 1 } } }
        ]
    },
    baoyu_ch3_01: {
        id: 'baoyu_ch3_01', chapter: 3, title: '秋窗风雨',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '转眼秋深，那日黄昏天色骤变，一场秋雨即将来临。宝玉想起黛玉素来体弱，命晴雯取了一件貂鼠斗篷，亲自送去潇湘馆。他轻叩房门，紫鹃来开。宝玉进屋，见黛玉正坐在灯下，面色苍白，似有病容。他将斗篷轻轻披在黛玉肩上，黛玉红了眼眶，轻声道："你……你怎么冒雨送来这个？"窗外秋雨淅沥，竹影摇曳，屋内烛火昏黄，映着两个人的影子。',
        textVariations: [
            { conditions: { 'relationships.ldaiyu': { min: 60 } }, text: '转眼秋深，那日黄昏天色骤变，一场秋雨即将来临。你想起黛玉素来体弱，不等晴雯动手，便自己取了那件貂鼠斗篷，冒着雨冲向潇湘馆。你推开房门时浑身湿透，却只顾着将斗篷披在她肩上。黛玉看着你湿透的衣衫，眼泪夺眶而出——她知道，你是不顾一切地跑来的。"傻子……"她轻声道，声音颤抖。"' },
            { conditions: { 'attributes.health': { max: 4 } }, text: '转眼秋深，秋雨将至。你本就身体不适，却仍执意要去看黛玉。走到半路便感到一阵眩晕袭来，险些跌倒。晴雯扶住你道："二爷，您身子不好，还是改日再去吧？"你摇摇头，咬牙坚持着走向潇湘馆。"' },
            { conditions: { 'attributes.wisdom': { min: 9 } }, text: '转眼秋深，秋雨将至。你站在窗前望着灰暗的天空，忽然想起太虚幻境中的警幻仙子之言——"痴儿，你可知这红尘中的情爱，不过是镜花水月？"你心中一动：若这一切终是虚幻，那么此刻的牵挂又有何意义？然而当你想起黛玉苍白的面容，所有的疑虑都烟消云散——虚幻也好，真实也罢，此刻的守护才是最重要的。"' }
        ],
        choices: [
            { text: '陪伴黛玉直到雨停', next: 'baoyu_ch3_01b', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.emotion': { add: 2 } } },
            { text: '叮嘱紫鹃照料后离去', next: 'baoyu_ch3_02', effects: { 'relationships.ldaiyu': { add: 3 } } }
        ]
    },
    baoyu_ch3_01b: {
        id: 'baoyu_ch3_01b', chapter: 3, title: '灯下对诗',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '雨势渐大，宝玉索性留了下来。黛玉从书架上取下一本诗集，两人并肩坐在灯下，你一句我一句地对起诗来。黛玉道："秋花惨淡秋草黄。"宝玉接道："耿耿秋灯秋夜长。"黛玉笑了，又道："助秋风雨来何速？"宝玉沉吟片刻，道："惊破秋窗秋梦绿。"两人相视而笑，窗外的风雨仿佛也温柔了几分。黛玉忽然轻叹道："若能一直这样就好了。"宝玉握住她的手，郑重道："会的。"',
        choices: [
            { text: '许下承诺', next: 'baoyu_ch3_02', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 3 } }, flags: { baoyu_promise: true } },
            { text: '沉默不语', next: 'baoyu_ch3_02', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    baoyu_ch3_02: {
        id: 'baoyu_ch3_02', chapter: 3, title: '贾政考校',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '数日后，贾政叫宝玉去考校功课。贾政严厉道："你整日在内帷厮混，不思进取，如何对得起贾家列祖列宗？"宝玉低头不语。贾政又道："我已替你定了先生，从明日起，每日到书房读经史子集，不得有误！"宝玉心中一沉——若被困在书房，便再难与姐妹们来往了。他想起黛玉的病容、宝钗的规劝、探春的抱负……这些人这些事，难道都要因为"功名"二字而舍弃吗？',
        choices: [
            { text: '向贾政求情，请求宽限', next: 'baoyu_ch3_03', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '默默领命，暗中周旋', next: 'baoyu_ch3_03', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '据理力争，表明心志', next: 'baoyu_ch3_03', effects: { 'attributes.emotion': { add: 3 } } }
        ]
    },
    baoyu_ch3_03: {
        id: 'baoyu_ch3_03', chapter: 3, title: '命运岔路',
        scene: 'daguan_yuan_gate', speaker: '旁白',
        text: '此后数月，宝玉在书房与内帷之间疲于奔命。他白天苦读经书，夜晚仍偷偷去潇湘馆看望黛玉。然而纸包不住火，王夫人终于知道了此事，将宝玉严加看管。宝玉站在大观园门口，望着紧闭的园门，心中五味杂陈。他面临着人生最重要的抉择——是顺从家族的期望，还是追随自己的本心？',
        textVariations: [
            { conditions: { 'attributes.wisdom': { min: 10 } }, text: '此后数月，你在书房与内帷之间疲于奔命。然而你渐渐看清了贾府的真相——这繁华的表象下，是千疮百孔的根基；这看似坚固的家族，不过是风中残烛。你站在大观园门口，心中已有计较：若要保护所爱之人，靠的不是顺从或反抗，而是足够的力量与智慧。"' },
            { conditions: { 'attributes.emotion': { min: 10 } }, text: '此后数月，你的心绪如乱麻般缠绕。白天读着经书，脑中却全是黛玉含泪的双眼；夜晚偷偷去看她，却总担心被发现。你感到自己快要被撕裂了——一边是家族的重担，一边是心中的挚爱。你站在大观园门口，紧握双拳，指甲几乎掐进掌心。"' },
            { conditions: { 'attributes.fortune': { max: 3 } }, text: '此后数月，诸事不顺。读书时频频走神被贾政责骂，偷看黛玉时险些被王夫人撞见，连平日最疼你的贾母也因家事烦心而无暇顾及你。你觉得自己像一片落叶，被命运的洪流裹挟着，身不由己地向前漂去。"' }
        ],
        choices: [
            { text: '顺从父命，苦读经书', next: 'baoyu_ch4_01a', effects: { 'attributes.wisdom': { add: 3 }, 'flags.obeyed_father': { set: true } } },
            { text: '坚持本心，守护大观园', next: 'baoyu_ch4_01b', effects: { 'attributes.emotion': { add: 3 }, 'flags.followed_heart': { set: true } } },
            { text: '寻找两全之策', next: 'baoyu_ch4_01c', effects: { 'attributes.wisdom': { add: 2 }, 'flags.compromised': { set: true } } },
            { text: '与黛玉私定终身，远走高飞', next: 'baoyu_ch4_01d', conditions: { 'flags.evt_xixiang_confess': true }, effects: { 'relationships.ldaiyu': { add: 10 }, 'attributes.emotion': { add: 5 }, 'flags.eloped': { set: true } } },
            { text: '以太虚之梦参悟人生', next: 'baoyu_ch4_01e', conditions: { 'flags.evt_taixu_dream': true }, effects: { 'attributes.wisdom': { add: 5 }, 'flags.enlightened': { set: true } } },
            { text: '出家修行，了却尘缘', next: 'baoyu_ch4_01f', effects: { 'attributes.wisdom': { add: 4 }, 'attributes.emotion': { add: -3 }, 'flags.monk_path': { set: true } } },
            { text: '经商济世，另辟蹊径', next: 'baoyu_ch4_01g', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 3 }, 'attributes.fortune': { add: 2 }, 'flags.merchant_path': { set: true } } },
            { text: '著书立说，以笔为剑', next: 'baoyu_ch4_01h', effects: { 'attributes.talent': { add: 3 }, 'attributes.wisdom': { add: 2 }, 'flags.writer_path': { set: true } } },
            { text: '归隐田园，远离红尘', next: 'baoyu_ch4_01i', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: -2 }, 'flags.hermit_path': { set: true } } },
            { text: '入朝革新，兼济天下', next: 'baoyu_ch4_01j', conditions: { 'attributes.wisdom': { min: 8 } }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 2 }, 'flags.reformer_path': { set: true } } },
            { text: '游历天下，见识世面', next: 'baoyu_ch4_01k', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.talent': { add: 2 }, 'flags.traveler_path': { set: true } } }
        ]
    },
    baoyu_ch4_01a: {
        id: 'baoyu_ch4_01a', chapter: 4, title: '寒窗苦读',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉闭门苦读，日夜不辍。他虽身在书房，心却常飞向大观园。一日深夜，他读到"世人都晓神仙好，惟有功名忘不了"一句，忽然泪如雨下。他想起了太虚幻境中的警幻仙子之言，想起了黛玉葬花时的悲吟。然而他也明白，若要保护大观园中的人，自己就必须先有足够的力量。他擦干眼泪，继续翻开了下一页书。',
        choices: [
            { text: '继续苦读，参加科举', next: 'baoyu_end_01', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '苦读之余暗中帮助探春改革', next: 'baoyu_end_03', effects: { 'attributes.wisdom': { add: 2 }, 'relationships.tanchun': { add: 5 } } }
        ]
    },
    baoyu_ch4_01b: {
        id: 'baoyu_ch4_01b', chapter: 4, title: '守护大观',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '宝玉不顾父命，仍在大观园中与姐妹们来往。他帮助探春推行改革，支持诗社活动，甚至亲自下厨为黛玉煮药。然而他的叛逆行为激怒了贾政，一场更大的风暴即将来临。王夫人开始着手清理怡红院，晴雯首当其冲被逐出。宝玉跪在王夫人面前苦苦哀求，却无济于事。他终于意识到，仅凭一腔热血，是保不住任何人的。',
        choices: [
            { text: '向贾母求助', next: 'baoyu_end_02', effects: { 'relationships.jiamu': { add: 5 } } },
            { text: '带着黛玉离开贾府', next: 'baoyu_end_04', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 3 } } }
        ]
    },
    baoyu_ch4_01c: {
        id: 'baoyu_ch4_01c', chapter: 4, title: '两全之道',
        scene: 'qiushuang_zhai', speaker: '旁白',
        text: '宝玉选择了两全之策。他白天在书房用功读书，夜晚则偷偷翻墙回大观园。他利用自己的才学帮助探春推行改革，延缓了贾府的衰败。他还暗中联络贾琏，让他帮忙在贾政面前为自己说情。渐渐地，贾政对他的态度有所缓和。然而这种双面生活让他身心俱疲，他不知道自己还能撑多久。',
        choices: [
            { text: '坚持到底，等待转机', next: 'baoyu_end_03', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '放弃功名，专心守护大观园', next: 'baoyu_end_02', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    baoyu_end_01: {
        id: 'baoyu_end_01', chapter: 5, title: '仕途之路·终章',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉顺从父命，苦读经书，终于金榜题名。然而功名到手之日，他却发现心中空空荡荡——大观园中的姐妹们已各自散去，黛玉含恨而终，宝钗独守空房。他站在金銮殿上，忽然觉得这一切不过是黄粱一梦。\n\n"世人都晓神仙好，惟有功名忘不了！古今将相在何方？荒冢一堆草没了。"\n\n他终于大彻大悟，在某一个雪夜，随一僧一道飘然而去，只留下那块通灵宝玉，在雪地中发出幽幽的光。正如那首《好了歌》所唱——功名、金银、娇妻、儿孙，到头来不过是一场空。他回头望了一眼贾府的方向，白茫茫大地真干净。',
        isEnding: true, poem: "世人都晓神仙好，惟有功名忘不了！古今将相在何方？荒冢一堆草没了。", choices: []
    },
    baoyu_end_02: {
        id: 'baoyu_end_02', chapter: 5, title: '守护大观·终章',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '宝玉坚持本心，在贾母的支持下与黛玉结为连理。然而贾府的衰败终究无法避免，抄家之日，一切繁华化为泡影。宝玉与黛玉流落民间，过着清贫却真挚的日子。\n\n"满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？"\n\n黛玉身体竟渐渐好转——也许远离了那勾心斗角的环境，她的心终于安宁了。宝玉虽失去了荣华富贵，却得到了最珍贵的东西——与心爱之人相守一生。他在乡间设馆教书，闲暇时与黛玉吟诗作对，日子虽清苦，却是他一生中最快乐的时光。每当桃花盛开的季节，他都会想起大观园中的那些日子——那些欢笑、那些泪水、那些再也回不去的青春。',
        isEnding: true, poem: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", choices: []
    },
    baoyu_end_03: {
        id: 'baoyu_end_03', chapter: 5, title: '两全之道·终章',
        scene: 'daguan_yuan_gate', speaker: '旁白',
        text: '宝玉选择了两全之策——他表面上顺从父命读书，暗地里仍与姐妹们保持来往。他利用才学帮助探春推行改革，延缓了贾府的衰败。最终他虽未能完全挽救贾府的命运，却至少保住了最珍贵的东西。\n\n"好风凭借力，送我上青云。"\n\n多年后，宝玉回望此生，感慨道："人生在世，不可能十全十美，但只要尽力而为，便无愧于心。"他终于明白，真正的智慧不是在两个极端之间做选择，而是在夹缝中找到属于自己的路。大观园虽已不复当年之盛，但那些美好的记忆，永远留在了他的心中。',
        isEnding: true, poem: "好风凭借力，送我上青云。", choices: []
    },
    baoyu_end_04: {
        id: 'baoyu_end_04', chapter: 5, title: '远走高飞·终章',
        scene: 'daguan_yuan_gate', speaker: '旁白',
        text: '宝玉做出了一个惊世骇俗的决定——他带着黛玉离开了贾府。两人一路南下，在江南水乡安顿下来。宝玉以书画为生，黛玉的身体在温润的南方竟渐渐好转。他们远离了那些勾心斗角，远离了那些是是非非，只守着彼此，过着平淡却幸福的日子。\n\n"花谢花飞花满天，红消香断有谁怜？"\n\n黛玉不再葬花——因为花落之处，便是新生之始。多年后，有人在大观园的废墟中发现了宝玉留下的一幅画——画中大观园繁花似锦，众姐妹笑颜如花，画的题款是："大观园中千般好，不及江南一缕风。"',
        isEnding: true, poem: "花谢花飞花满天，红消香断有谁怜？", choices: []
    },

    ldaiyu_ch1_01: {
        id: 'ldaiyu_ch1_01', chapter: 1, title: '初入贾府',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '林黛玉自扬州登舟北上，终于抵达京城。她心中忐忑，虽是外祖母家，终究是寄人篱下。进了荣庆堂，一位鬓发如银的老母迎上来，将她搂入怀中大哭。独见宝玉时，两人四目相对，似有前缘。宝玉道："这个妹妹，我曾见过的。"黛玉心中一震——这似曾相识之感，从何而来？',
        choices: [
            { text: '含羞低头', next: 'ldaiyu_ch1_02', effects: { 'relationships.jbaoyu': { add: 5 }, 'attributes.emotion': { add: 2 } } },
            { text: '坦然应对', next: 'ldaiyu_ch1_02', effects: { 'relationships.jbaoyu': { add: 3 }, 'attributes.wisdom': { add: 1 } } }
        ]
    },
    ldaiyu_ch1_02: {
        id: 'ldaiyu_ch1_02', chapter: 1, title: '似曾相识',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '宝玉问黛玉可有玉没有，黛玉摇头。宝玉竟摘下通灵宝玉狠命摔去，骂道："什么稀罕物！"吓得众人慌忙劝住。贾母安慰道："你妹妹原有玉来着，因她母亲去世，将玉随葬了。"黛玉见因自己一句话惹出这等事来，心中又惊又悔，暗暗自责。她回到住处，独自垂泪，心中想道："我初来乍到，便惹出这等事端，日后可如何是好？"',
        choices: [
            { text: '暗中垂泪', next: 'ldaiyu_ch1_03', effects: { 'attributes.emotion': { add: 2 } } },
            { text: '理解宝玉的赤诚', next: 'ldaiyu_ch1_03', effects: { 'relationships.jbaoyu': { add: 5 } } }
        ]
    },
    ldaiyu_ch1_03: {
        id: 'ldaiyu_ch1_03', chapter: 1, title: '潇湘安顿',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '贾母安排黛玉住进潇湘馆。千竿翠竹环绕，清幽雅致，正合黛玉心意。紫鹃是贾母拨来服侍黛玉的丫鬟，她忠心耿耿，与黛玉情同姐妹。黛玉安顿下来后，紫鹃端来燕窝粥，劝道："姑娘初来，且安心住着。老太太待姑娘与亲孙女一般，谁也不敢小瞧了去。"黛玉微微点头，心中却想：终究不是自己的家。',
        choices: [
            { text: '写诗抒怀', next: 'ldaiyu_ch2_01', effects: { 'attributes.talent': { add: 2 } } },
            { text: '与紫鹃闲话家常', next: 'ldaiyu_ch2_01', effects: { 'attributes.emotion': { add: 1 } } }
        ]
    },
    ldaiyu_orig_01: { id: 'ldaiyu_orig_01', chapter: 1, title: '夜读西厢', scene: 'xiaoxiang_guan', speaker: '旁白', text: '那日宝玉走后，黛玉独自坐在灯下，翻开了那本《西厢记》。书中的文字如同一把钥匙，打开了她心中尘封已久的那扇门——原来，世间还有这样的爱情，可以这样热烈、这样不顾一切。\n\n"花落水流红，闲愁万种，无语怨东风。"\n\n她读到张生跳墙相会时，脸颊发烫；读到崔莺莺月下待约时，心跳加速。她忽然明白了一件事：她对宝玉的感情，不正是如此吗？只是她不敢说、不能说……\n\n她提笔在纸上写下："满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？"写完，她将纸折好，压在砚台之下。', textVariations: [{ conditions: { 'attributes.emotion': { min: 8 } }, text: '黛玉独自在灯下读《西厢》，越读越是心惊。书中张生与崔莺莺的爱情，何其像她与宝玉？可人家终究是有情人终成眷属，而她呢？她想起白日里宝玉看她的眼神，心中涌起一股难以名状的酸楚与甜蜜交织的情感。她提笔写道："眼空蓄泪泪空垂，暗洒闲抛却为谁？"' }], choices: [{ text: '将心事化为诗句', next: 'ldaiyu_orig_02', effects: { 'attributes.talent': { add: 3 }, 'attributes.emotion': { add: 2 } } }, { text: '将书藏好，不让任何人知道', next: 'ldaiyu_orig_03', effects: { 'attributes.wisdom': { add: 1 } } }] },
    ldaiyu_orig_02: { id: 'ldaiyu_orig_02', chapter: 1, title: '诗中寄情', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉一夜未眠，写了十几首诗。每一首都是关于宝玉的，却又没有一首直接提到他的名字。她将这些诗稿叠好，放进一个锦囊中。\n\n紫鹃见她眼睛红红的，问道："姑娘是不是又没睡好？"黛玉摇摇头："我没事。"她望向窗外怡红院的方向，心中默默念道：你知不知道，我为你写了多少首诗？每一首都是我的心声，可惜你永远也听不到……\n\n或者，其实你已经听到了？', choices: [{ text: '将锦囊藏好，作为秘密', next: 'ldaiyu_ch2_01', effects: { 'attributes.talent': { add: 2 }, 'flags.poem_pouch': true } }, { text: '有朝一日要让他看到', next: 'ldaiyu_ch2_01', effects: { 'attributes.emotion': { add: 2 } } }] },
    ldaiyu_orig_03: { id: 'ldaiyu_orig_03', chapter: 1, title: '深藏心底', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉将《西厢记》藏在书架最深处。她告诉自己：林黛玉，你要矜持，你要自重。可是每当夜深人静，她总会忍不住将它取出来，翻到那一页——张生对崔莺莺说的那句"小生姓张，名珙，字君瑞"，她已能倒背如流。\n\n紫鹃有一次问她："姑娘最近在看什么书？"黛玉脸一红："没什么……一些杂书。"紫鹃似笑非笑地看着她——这丫头，什么都知道。', choices: [{ text: '继续前往葬花时节', next: 'ldaiyu_ch2_01', effects: { 'attributes.wisdom': { add: 1 } } }] },

    ldaiyu_burn_01: { id: 'ldaiyu_burn_01', chapter: 4, title: '焚稿断情', scene: 'xiaoxiang_guan', speaker: '旁白', text: '金玉良缘已成定局的消息传来，黛玉终于崩溃了。她将自己这些年写的所有诗稿一一取出，堆在火盆边。这些诗，每一首都与宝玉有关——他的笑、他的泪、他递来的帕子、他含情的眼神……\n\n"都烧了吧。"她轻声道，声音平静得可怕。\n\n火焰吞噬了那些纸张，化作灰烬飘散在空中。黛玉望着那飞舞的灰烬，眼中已无泪水——泪早已流干了。\n\n"质本洁来还洁去，强于污淖陷渠沟。"她喃喃念着这句自己写过的诗，嘴角浮现出一丝凄凉的微笑。', textVariations: [{ conditions: { 'relationships.jbaoyu': { min: 60 } }, text: '金玉良缘的消息传来，黛玉将自己所有的诗稿堆在火盆边。这些诗，是她用整个青春写就的情书——每一首都藏着"宝玉"两个字。火焰升起的那一刻，她感到自己的灵魂也在一同燃烧。然而奇怪的是，她并不觉得痛，只觉得……解脱。' }, { conditions: { 'attributes.health': { max: 3 } }, text: '黛玉的身体已经撑不住了。她靠在床榻上，看着紫鹃将诗稿一页页投入火盆。她想阻止，却连抬起手指的力气都没有。火焰映在她苍白的脸上，她的眼神渐渐变得空洞——那个才情绝代的潇湘妃子，正在一点点地消逝。' }], choices: [{ text: '焚稿之后，病入膏肓', next: 'ldaiyu_burn_02', effects: { 'attributes.health': { add: -5 }, 'attributes.emotion': { add: -5 }, 'flags.manuscripts_burned': true } }, { text: '在最后一刻改变心意', next: 'ldaiyu_burn_03', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 2 } } }] },
    ldaiyu_burn_02: { id: 'ldaiyu_burn_02', chapter: 5, title: '魂归离恨天', scene: 'xiaoxiang_guan', speaker: '旁白', text: '焚稿后的第三日，黛玉的病情急剧恶化。贾母来了，王夫人来了，宝钗也来了——所有人都来了，唯独宝玉被关在门外，不许进来。\n\n黛玉躺在床榻上，气若游丝。她望着窗外的翠竹，轻声道："紫鹃……我的诗稿呢？"紫鹃哭着道："姑娘……您不是都烧了吗？"黛玉微微一笑："是啊……烧了就好。烧了……就不留遗憾了。"\n\n她的目光越过众人，望向紧闭的房门——她在等一个人。可是那个人，再也进不来了。\n\n"宝玉……我来还你的泪……还完了……"\n\n她的手缓缓垂落，眼中的光芒渐渐消散。窗外，一片竹叶悄然落下。\n\n"寒塘渡鹤影，冷月葬花魂。"', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },
    ldaiyu_burn_03: { id: 'ldaiyu_burn_03', chapter: 4, title: '回光返照', scene: 'xiaoxiang_guan', speaker: '旁白', text: '就在火焰即将吞噬最后一张诗稿时，黛玉忽然伸手拦住了紫鹃。"等等……"她的声音微弱但坚定，"我不能烧掉它们。这些诗……是我活过的证明。"\n\n她将剩余的诗稿紧紧抱在怀中，如同抱着自己的孩子。她对自己说：林黛玉，你不能就这样认输。你还活着，你的诗还活着，你的爱还活着——只要你不放弃，就没有人能打败你。\n\n从那天起，黛玉变了。她不再以泪洗面，而是以笔为剑，以诗为甲，开始了全新的生活。', choices: [{ text: '以诗重生，自立自强', next: 'ldaiyu_end_05', effects: { 'attributes.talent': { add: 8 }, 'attributes.wisdom': { add: 5 }, 'attributes.health': { add: 3 }, 'flags.reborn_by_poetry': true } }] },

    ldaiyu_festival_01: { id: 'ldaiyu_festival_01', chapter: 2, title: '元宵灯谜', scene: 'rongguo_hall', speaker: '旁白', text: '元宵佳节，贾府上下猜灯谜。黛玉作了一则谜语："朝罢谁携两袖香？粉筠斜倚枕函香。更有一种堪恨处，六朝旧事断人肠。"众人皆不解其意，唯有宝玉看了出来——这是在借"粉筠"（谐音"粉君"，即美人）暗喻自己对感情的执着与不安。\n\n贾母笑道："好谜！好谜！只是这"断人肠"三字，太悲了些。"黛玉低头不语。是的，太悲了。可她的命，又何尝不是如此？', choices: [{ text: '继续参与节日活动', next: 'ldaiyu_ch2_01', effects: { 'attributes.charm': { add: 1 }, 'attributes.talent': { add: 1 } } }] },

    ldaiyu_dream_01: { id: 'ldaiyu_dream_01', chapter: 3, title: '太虚幻境', scene: 'xiaoxiang_guan', speaker: '旁白', text: '那日午后，黛玉午睡时做了一个奇怪的梦。梦中她来到一处仙境，牌匾上写着"太虚幻境"。一位仙姑迎上来，道："绛珠仙子，你可还记得前世的约定？"黛玉茫然不知。仙姑叹道："你本是西方灵河岸边的绛珠仙草，因神瑛侍者日日灌溉，得以久延岁月。后来神瑛侍者下凡历劫，你也随之下凡，要以一生的眼泪偿还他的灌溉之恩。"\n\n黛玉猛然惊醒，浑身冷汗。她想起梦中的话，又想起宝玉——难道他们之间的感情，真的是前世注定的？难道她这一生，就是为了流泪而存在的？\n\n"不……"她握紧拳头，"我不信命。我要用自己的方式活着。"', textVariations: [{ conditions: { 'attributes.wisdom': { min: 7 } }, text: '黛玉梦见太虚幻境，得知自己是绛珠仙草转世，此生是为还泪而来。醒来后她并未悲伤，反而笑了——既然知道了命运的安排，便可以更好地与之对抗。她对自己说：命运要我哭，我便偏要笑；命运要我弱，我便偏要强。' }], choices: [{ text: '不信命，只信自己', next: 'ldaiyu_ch3_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 2 }, 'flags.defied_fate': true } }, { text: '接受命运，顺其自然', next: 'ldaiyu_ch3_01', effects: { 'attributes.emotion': { add: -1 }, 'attributes.wisdom': { add: 1 } } }] },

    ldaiyu_ch2_01: {
        id: 'ldaiyu_ch2_01', chapter: 2, title: '葬花吟',
        scene: 'garden_path', speaker: '旁白',
        text: '暮春时节，大观园中落花满地。黛玉肩担花锄，手执花帚，将落花掩埋在花冢之中。她一面葬花，一面低吟："花谢花飞花满天，红消香断有谁怜？"吟至"一朝春尽红颜老，花落人亡两不知"时，已是泪流满面。恰被宝玉听见，他站在山坡上，听得痴了。',
        textVariations: [
            { conditions: { 'attributes.talent': { min: 9 } }, text: '暮春时节，大观园中落花满地。你肩担花锄，手执花帚，将落花掩埋在花冢之中。你低吟着《葬花吟》，字字泣血——"花谢花飞花满天，红消香断有谁怜？……一朝春尽红颜老，花落人亡两不知。"这首诗从你心中涌出，如泉如瀑，一气呵成。你写下的不只是一首诗，而是你全部的生命与灵魂。"' },
            { conditions: { 'attributes.health': { max: 3 } }, text: '暮春时节，大观园中落花满地。你本想葬花，却感到一阵剧烈的咳嗽袭来，不得不扶着花锄喘息。紫鹃连忙上前搀扶你道："姑娘身子不好，还是回去歇着吧。"你摇摇头，坚持将最后几瓣落花埋入土中。"连花都有归宿……"你喃喃自语，"我又该何去何从呢？"' },
            { conditions: { 'relationships.jbaoyu': { min: 60 } }, text: '暮春时节，大观园中落花满地。你肩担花锄，手执花帚，将落花掩埋在花冢之中。你低吟着《葬花吟》——"花谢花飞花满天……"当你念到"质本洁来还洁去"时，身后忽然传来一声叹息。你回头，正撞上宝玉含泪的目光。他不知何时来的，也不知听了多少。四目相对，千言万语尽在不言中。"' }
        ],
        choices: [
            { text: '宝玉上前安慰', next: 'ldaiyu_ch2_02', effects: { 'relationships.jbaoyu': { add: 5 } } },
            { text: '含羞而去', next: 'ldaiyu_ch2_02', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    ldaiyu_ch2_02: {
        id: 'ldaiyu_ch2_02', chapter: 2, title: '潇湘夜雨',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '入夜，秋雨淅沥，黛玉独坐潇湘馆中，辗转难眠。她轻声道："紫鹃，你说我在这贾府，算是什么呢？"紫鹃道："姑娘是老太太的亲外孙女，谁敢小瞧了去？"黛玉苦笑道："亲外孙女……终究不是亲孙女。"她望着窗外的雨幕，低低吟道："秋窗风雨夕，灯影照无眠。"忽然院外传来脚步声，竟是宝玉冒雨前来探望，手中还拿着一卷书。',
        choices: [
            { text: '与宝玉共读', next: 'ldaiyu_ch2_03', effects: { 'relationships.jbaoyu': { add: 5 }, 'attributes.talent': { add: 2 } } },
            { text: '催宝玉回去，怕他淋雨', next: 'ldaiyu_ch2_03', effects: { 'relationships.jbaoyu': { add: 3 }, 'attributes.emotion': { add: 2 } } }
        ]
    },
    ldaiyu_ch2_03: {
        id: 'ldaiyu_ch2_03', chapter: 2, title: '金兰契互剖金兰语',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '宝钗来看黛玉，见她正在咳嗽，便关切地给出药方，又送来燕窝。黛玉颇为感动，道："宝姐姐，你待我这样好，我从前竟有些错看了你。"宝钗握着她的手道："从前的事都过去了，以后我们便是好姐妹。"两人相视而笑，前嫌尽释。然而黛玉心中仍有一丝隐忧——宝钗对宝玉的心意，她岂会不知？',
        choices: [
            { text: '与宝钗坦诚相待', next: 'ldaiyu_ch2_04', effects: { 'relationships.xbaochai': { add: 5 }, 'attributes.wisdom': { add: 2 } } },
            { text: '心中仍存芥蒂', next: 'ldaiyu_ch2_04', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    ldaiyu_ch2_04: {
        id: 'ldaiyu_ch2_04', chapter: 2, title: '秋窗风雨夕',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '秋雨夜，黛玉独坐潇湘馆中，听着窗外竹梢蕉叶之上的雨声淅沥。她提笔写道："秋花惨淡秋草黄，耿耿秋灯秋夜长。已觉秋窗秋不尽，那堪风雨助凄凉！"写罢，她将诗稿揉成一团，又展开抚平，反反复复。紫鹃端来热茶，轻声道："姑娘，夜深了，该歇了。"黛玉望着窗外的雨幕，忽然想起远在扬州的父亲——他若还在，自己何至于此？',
        choices: [
            { text: '以诗寄情，将悲伤化为力量', next: 'ldaiyu_ch2_05', effects: { 'attributes.talent': { add: 2 }, 'attributes.emotion': { add: 1 } } },
            { text: '强忍泪水，早些安歇', next: 'ldaiyu_ch2_05', effects: { 'attributes.health': { add: 1 } } }
        ]
    },
    ldaiyu_ch2_05: {
        id: 'ldaiyu_ch2_05', chapter: 2, title: '金玉之议',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '次日，黛玉从紫鹃口中得知，王夫人已在贾母面前提起金玉良缘之事。虽然贾母未置可否，但黛玉心中已如翻江倒海。她想起宝钗的金锁上刻着"不离不弃，芳龄永继"，而宝玉的通灵宝玉上刻着"莫失莫忘，仙寿恒昌"——这两句话，何其相似？难道这真是天意？她攥紧了手中的丝帕，指节发白。',
        choices: [
            { text: '找宝玉问个明白', next: 'ldaiyu_ch3_01', effects: { 'relationships.jbaoyu': { add: 3 }, 'attributes.emotion': { add: 2 } } },
            { text: '独自承受，不露声色', next: 'ldaiyu_ch3_01', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.health': { add: -1 } } }
        ]
    },
    ldaiyu_ch3_01: {
        id: 'ldaiyu_ch3_01', chapter: 3, title: '命运抉择',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '金玉良缘的消息传到黛玉耳中，她如遭雷击。紫鹃劝道："若宝二爷真心待你，谁也拦不住。姑娘何不向老太太表明心意？"黛玉望着窗外的翠竹，心中翻涌不已。她想起宝玉摔玉时的赤诚，想起他冒雨送斗篷的温柔，想起两人共读西厢的默契……她终于做出了一个决定。',
        textVariations: [
            { conditions: { 'attributes.wisdom': { min: 9 } }, text: '金玉良缘的消息传来，你却出奇地平静。你忽然看清了一件事——贾府中的每一个人，都被命运推着走：宝钗被金锁束缚，宝玉被家族期望捆绑，连贾母也被礼教所困。而你呢？你是唯一一个可以选择自己道路的人。你望向窗外的翠竹，心中已有决断——不再以泪还恩，而是以才情自立。"' },
            { conditions: { 'attributes.emotion': { min: 10 } }, text: '金玉良缘的消息传来，你的心像被撕裂了一样痛。你想哭，却发现泪已流干；你想喊，却发不出声音。紫鹃看着你苍白的脸色，急得直掉眼泪："姑娘……"你握住她的手，勉强笑了笑。你知道，此刻若不做出选择，等待你的只有毁灭。"' },
            { conditions: { 'attributes.health': { max: 3 } }, text: '金玉良缘的消息传来，你只觉得眼前一黑，险些跌倒。紫鹃连忙扶住你，哭道："姑娘！"你靠在床榻上，感到生命正在从身体中一点点流逝。也许，这就是命吧？绛珠仙草本就是来还恩的，恩还完了，也该走了……然而当你想到宝玉含泪的目光，心中又燃起一丝不甘——就这样认输吗？"' },
            { conditions: { 'relationships.jbaoyu': { min: 70 } }, text: '金玉良缘的消息传来，你第一个想到的不是悲伤，而是宝玉。他现在一定也很难过吧？你们之间那些默契、那些心意相通的时刻，难道都要被这"天意"二字抹杀？你攥紧了拳头——不，绝不。若天意要拆散你们，那便与天意斗上一斗！"' }
        ],
        choices: [
            { text: '隐忍等待，以泪还恩', next: 'ldaiyu_end_01', effects: { 'attributes.emotion': { add: 2 } } },
            { text: '主动向贾母表明心意', next: 'ldaiyu_end_02', effects: { 'attributes.charm': { add: 2 } } },
            { text: '以诗言志，自立自强', next: 'ldaiyu_end_03', effects: { 'attributes.talent': { add: 3 } } },
            { text: '与宝玉远走高飞', next: 'ldaiyu_end_04', effects: { 'attributes.emotion': { add: 3 }, 'relationships.jbaoyu': { add: 8 } } },
            { text: '以诗才赢得贾母支持', next: 'ldaiyu_end_05', conditions: { 'flags.evt_homesick_poem': true }, effects: { 'attributes.talent': { add: 5 }, 'relationships.jiamu': { add: 8 }, 'flags.poet_victory': { set: true } } },
            { text: '与宝钗坦诚相对，共商对策', next: 'ldaiyu_end_06', conditions: { 'flags.evt_confront_rumor': true }, effects: { 'attributes.wisdom': { add: 3 }, 'relationships.xbaochai': { add: 5 }, 'flags.alliance_baochai': { set: true } } },
            { text: '行医济世，以才学立足', next: 'ldaiyu_ch4_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.talent': { add: 2 }, 'flags.healer_path': { set: true } } },
            { text: '开馆教书，以诗传世', next: 'ldaiyu_ch4_02', conditions: { 'attributes.talent': { min: 8 } }, effects: { 'attributes.talent': { add: 4 }, 'attributes.wisdom': { add: 2 }, 'flags.scholar_path': { set: true } } },
            { text: '以丹青之技立足', next: 'ldaiyu_ch4_03', effects: { 'attributes.talent': { add: 3 }, 'attributes.wisdom': { add: 2 }, 'flags.painter_path': { set: true } } },
            { text: '远走江南，自立门户', next: 'ldaiyu_ch4_04', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 2 }, 'flags.south_path': { set: true } } },
            { text: '开设潇湘馆，以诗画会友', next: 'ldaiyu_ch4_05', conditions: { 'attributes.talent': { min: 7 } }, effects: { 'attributes.talent': { add: 3 }, 'attributes.charm': { add: 2 }, 'flags.xiaoxiang_hall': { set: true } } },
            { text: '与宝玉一同归隐', next: 'ldaiyu_ch4_06', conditions: { 'relationships.jbaoyu': { min: 15 } }, effects: { 'relationships.jbaoyu': { add: 8 }, 'attributes.emotion': { add: 5 }, 'attributes.health': { add: 2 }, 'flags.elope_with_baoyu': { set: true } } }
        ]
    },
    ldaiyu_end_01: { id: 'ldaiyu_end_01', chapter: 5, title: '木石前盟·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉选择了坚守木石前盟。她以泪洗面，以诗寄情，将毕生的爱恋都倾注在对宝玉的思念之中。\n\n"花谢花飞花满天，红消香断有谁怜？游丝软系飘春榭，落絮轻沾扑绣帘。"\n\n绛珠仙草以泪还恩，泪尽而逝，此生虽短，情却绵长。她临终前低吟："一朝春尽红颜老，花落人亡两不知……"窗外竹影摇曳，似在为她送行。那潇湘馆中的千竿翠竹，从此再无人为它们吟诗了。木石前盟，终是天地间最真挚的誓言——纵然结局凄美，此情却永不磨灭。', isEnding: true, poem: "花谢花飞花满天，红消香断有谁怜？游丝软系飘春榭，落絮轻沾扑绣帘。", choices: [] },
    ldaiyu_end_02: { id: 'ldaiyu_end_02', chapter: 5, title: '孤雁远行·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '黛玉选择了放手。她不愿在金玉良缘的阴影下苟活，在一个月明之夜悄然离开了大观园。\n\n"寒塘渡鹤影，冷月葬花魂。"\n\n她留下了一封书信："此生无缘，来世再续。愿君珍重，勿以我为念。"黛玉如一只孤雁，飞向了远方，去寻找属于自己的天空。她辗转到了江南，在一间书院中教授诗文，以才学自立于世。她终于不再以泪洗面，而是以诗才照亮了自己的人生。每当月圆之夜，她仍会想起大观园中的那些日子——但她不再悲伤，因为她知道，放手也是一种勇气。', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },
    ldaiyu_end_03: { id: 'ldaiyu_end_03', chapter: 5, title: '破茧重生·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉不再将自己的人生寄托在任何人身上。她以诗才闻名，将自己的作品结集出版，成为了一代才女。\n\n"半卷湘帘半掩门，碾冰为土玉为盆。偷来梨蕊三分白，借得梅花一缕魂。"\n\n她在大观园中开设了女子诗社，教导年轻女子读书识字。她说："情之所至，不在朝朝暮暮。若两心相知，何须一纸婚书？"她终于不再以泪洗面，而是以才情照亮了自己的人生。绛珠仙草不再以泪还恩，而是以诗还恩——这何尝不是另一种圆满？', isEnding: true, poem: "半卷湘帘半掩门，碾冰为土玉为盆。偷来梨蕊三分白，借得梅花一缕魂。", choices: [] },
    ldaiyu_end_04: { id: 'ldaiyu_end_04', chapter: 5, title: '比翼双飞·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '黛玉做出了一个大胆的决定——她与宝玉一同离开了贾府。两人一路南下，在江南水乡安顿下来。\n\n"偷来梨蕊三分白，借得梅花一缕魂。"\n\n远离了那些是是非非，黛玉的身体竟渐渐好转。她与宝玉以诗书为伴，过着清贫却幸福的日子。多年后，黛玉回忆起大观园的岁月，感慨道："若非当初放手一搏，我恐怕早已泪尽而亡。原来，命运并非不可改变——只要你敢迈出那一步。"她终于明白，绛珠仙草不必以泪还恩，也可以以笑还恩。', isEnding: true, poem: "偷来梨蕊三分白，借得梅花一缕魂。", choices: [] },

    xbaochai_ch1_01: {
        id: 'xbaochai_ch1_01', chapter: 1, title: '进京待选',
        scene: 'hengwu_yuan', speaker: '旁白',
        text: '薛宝钗随母亲进京待选。她虽年仅十七，却已沉稳如山。她佩着金锁，上面"不离不弃，芳龄永继"八个字，是幼时癞头和尚所赠。薛姨妈常对她说："你金锁上的字，与宝玉玉上的字倒是一对儿。"宝钗面上不动声色，心中却暗暗思量。',
        textVariations: [
            { conditions: { 'attributes.wisdom': { min: 9 } }, text: '薛宝钗随母亲进京待选。她早已看透了这"待选"背后的真相——不过是薛家借机接近贾府的幌子罢了。她摩挲着手中的金锁，心中冷笑：这世上的人，哪一个不是在演戏？她比谁都清楚自己的处境：一个商贾之女，想要在这侯门公府中立足，唯有步步为营。' },
            { conditions: { 'attributes.emotion': { min: 9 } }, text: '薛宝钗随母亲进京待选。她望着窗外飞过的鸟儿，心中涌起一股莫名的渴望——那鸟儿可以自由自在地飞翔，而她却被金锁牢牢地束缚着。"不离不弃，芳龄永继"——这八个字何尝不是一种诅咒？意味着她的一生都要被这枚小小的金锁所定义。她忽然很想哭，却又生生忍住了——宝姐姐是不会哭的。' },
            { conditions: { 'attributes.talent': { min: 8 } }, text: '薛宝钗随母亲进京待选。她的行囊中藏着一本《牡丹亭》——那是她偷偷带出来的。她虽常劝人读正经书，自己却偏爱这些才子佳人的故事。她想起杜丽娘因情而死、为情而生，心中不禁想：我薛宝钗，难道就只能做一枚金锁的傀儡吗？' }
        ],
        choices: [
            { text: '去贾母处请安', next: 'xbaochai_ch1_02', effects: { 'relationships.jiamu': { add: 3 } } },
            { text: '在蘅芜苑中读书', next: 'xbaochai_ch1_02', effects: { 'attributes.wisdom': { add: 2 } } }
        ]
    },
    xbaochai_ch1_02: {
        id: 'xbaochai_ch1_02', chapter: 1, title: '蘅芜幽香',
        scene: 'hengwu_yuan', speaker: '旁白',
        text: '宝钗的蘅芜苑中，不见花木，唯有异草藤萝，清香扑鼻。她独坐窗前，翻看一本《牡丹亭》。她虽常劝人读正经书，自己却偏爱这些才子佳人的故事。莺儿端茶进来，笑道："姑娘又在看这些了，若让太太知道了，又要说您。"宝钗合上书，淡淡道："不过是消遣罢了。"她心中却在想：杜丽娘尚能为情而死、为情而生，我薛宝钗难道连想一想的自由都没有吗？',
        choices: [
            { text: '放下书，去做针线', next: 'xbaochai_ch2_01', effects: { 'attributes.wisdom': { add: 1 } } },
            { text: '继续读书，沉醉其中', next: 'xbaochai_ch2_01', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    xbaochai_ch2_01: {
        id: 'xbaochai_ch2_01', chapter: 2, title: '金兰之交',
        scene: 'xiaoxiang_guan', speaker: '旁白',
        text: '宝钗去看黛玉，见她正在咳嗽，便关切地给出药方，又送来燕窝。黛玉颇为感动，道："宝姐姐，你待我这样好，我从前竟有些错看了你。"宝钗握着她的手道："从前的事都过去了，以后我们便是好姐妹。"',
        textVariations: [
            { conditions: { 'relationships.ldaiyu': { min: 50 } }, text: '宝钗去看黛玉，两人相视而笑，已是无话不谈的知己。黛玉递给她一盏茶，道："宝姐姐，你知道吗？这世上能真正懂我的人，除了宝玉，就只有你了。"宝钗心中一暖——她终于找到了一个不需要伪装的人。' },
            { conditions: { 'attributes.wisdom': { min: 9 } }, text: '宝钗去看黛玉，心中自有计较。她知道，若要在这贾府中立足，必须与最得宠的姑娘交好。然而当她看到黛玉苍白的脸色和咳嗽的身影时，那些算计忽然都烟消云散了。她握住黛玉的手，发现自己竟然是真心实意地在关心她。' }
        ],
        choices: [
            { text: '与黛玉成为知己', next: 'xbaochai_ch2_02', effects: { 'relationships.ldaiyu': { add: 8 } } },
            { text: '保持分寸', next: 'xbaochai_ch2_02', effects: { 'relationships.ldaiyu': { add: 3 } } }
        ]
    },
    xbaochai_orig_01: { id: 'xbaochai_orig_01', chapter: 1, title: '扑蝶滴翠', scene: 'garden_path', speaker: '旁白', text: '那日春光明媚，宝钗独自在园中散步。忽见两只玉色蝴蝶在花丛中翩翩起舞，她童心大起，取出扇子便追。蝴蝶飞过假山、穿过花径，宝钗一路追赶，不知不觉来到了滴翠亭外。\n\n亭中传来说话声，是两个小丫鬟在议论府中的秘事。宝钗本想避开，却已来不及——她灵机一动，故意加重脚步声，高声喊道："颦儿，我看你往哪里藏！"然后推门而入，装作是在找黛玉。\n\n这一招"金蝉脱壳"，既化解了尴尬，又将嫌疑引向了黛玉。事后她心中隐隐不安——这样做，对得起黛玉吗？\n\n"机关算尽太聪明"——可若不算计，她在这贾府中又该如何自处？', textVariations: [{ conditions: { 'attributes.wisdom': { min: 8 } }, text: '宝钗在滴翠亭外听到丫鬟们说悄悄话，立刻意识到若被发现自己偷听会惹来麻烦。她脑中飞速运转：装作没听见？不行，她们已经发现有人了。直接进去？也不行。于是她想出了"嫁祸黛玉"之计。做完后她站在原地，望着远处的潇湘馆方向，心中第一次感到了一丝愧疚。' }], choices: [{ text: '将此事压在心底', next: 'xbaochai_ch2_02', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '找机会向黛玉解释', next: 'xbaochai_orig_02', effects: { 'relationships.ldaiyu': { add: 3 }, 'attributes.emotion': { add: 1 } } }] },
    xbaochai_orig_02: { id: 'xbaochai_orig_02', chapter: 2, title: '蘅芜释疑', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝钗来到潇湘馆，见黛玉正伏案写诗。她犹豫了许久，终于开口道："林妹妹，有件事我想告诉你……"她将滴翠亭的事一五一十地说了，包括自己如何嫁祸于黛玉。\n\n黛玉听完后沉默了良久，忽然笑了："宝姐姐，你不必如此坦诚。这府中的人，谁不是在算计？你能告诉我，已是难得。"宝钗心中一松，却又更加沉重——黛玉的宽容，反而让她更觉惭愧。\n\n从那天起，两人之间的关系变得更加微妙——既是知己，又是情敌；既是姐妹，又各有心事。', choices: [{ text: '继续前往冷香丸', next: 'xbaochai_ch2_02', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.wisdom': { add: 1 } } }] },

    xbaochai_advise_01: { id: 'xbaochai_advise_01', chapter: 2, title: '劝学怡红', scene: 'yihong_yuan', speaker: '旁白', text: '那日宝钗去怡红院看望宝玉，见他正在读《庄子》。她皱眉道："宝兄弟，你怎么读这种书？这些杂书只会让人心浮气躁，于功名无益。"宝玉不以为然："姐姐何必如此功利？"宝钗叹道："我不是功利，我是为你好。你可知这世道艰难，若无真才实学，将来如何立足？"\n\n宝玉沉默了。他知道宝钗说的有道理，可他实在无法接受那种"正经"的人生。两人相对无言，空气中弥漫着一种说不清的隔阂。\n\n"任是无情也动人"——宝钗的规劝虽是出于好意，却在两人之间划下了一道看不见的线。', choices: [{ text: '听从宝钗的建议，尝试读书', next: 'xbaochai_advise_02', effects: { 'attributes.wisdom': { add: 3 }, 'relationships.xbaochai': { add: 2 } } }, { text: '坚持自己的道路', next: 'xbaochai_advise_03', effects: { 'attributes.emotion': { add: 2 } } }] },
    xbaochai_advise_02: { id: 'xbaochai_advise_02', chapter: 2, title: '半途而废', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉试着按宝钗的建议读了几天书，却发现根本无法专心。他的思绪总是飘向潇湘馆的方向，飘向那些诗和梦……最终他还是放下了书本，拿起了《西厢记》。\n\n宝钗得知后，并未责怪他，只是轻轻叹了口气："我明白了。有些事，勉强不来。"她的语气中有无奈，也有释然——也许她从一开始就知道，宝玉的心不在这些"正经事"上。', choices: [{ text: '与宝钗坦白心迹', next: 'xbaochai_orig_08', effects: { 'relationships.xbaochai': { add: 3 } } }, { text: '各自保留想法', next: 'xbaochai_ch2_02', effects: { 'attributes.wisdom': { add: 1 } } }] },
    xbaochai_advise_03: { id: 'xbaochai_advise_03', chapter: 2, title: '各走各路', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉婉拒了宝钗的劝学建议。宝钗没有生气，只是静静地看着他，眼中闪过一丝复杂的情绪——失望？理解？还是早已预料到的平静？\n\n"宝兄弟，"她最后说道，"我知道你的心思不在此。但你要记住：无论你选择什么路，都要为自己的选择负责。"说完她转身离去，裙摆扫过门槛，带起一阵淡淡的花香。\n\n宝玉望着她的背影，心中涌起一股说不清的感觉——这个女子，明明是最懂道理的人，却偏偏无法得到她最想要的东西。', choices: [{ text: '目送宝钗离去', next: 'xbaochai_ch2_02', effects: { 'attributes.emotion': { add: 1 } } }] },

    xbaochai_wedding_01: { id: 'xbaochai_wedding_01', chapter: 5, title: '金玉成亲', scene: 'rongguo_hall', speaker: '旁白', text: '金玉良缘终成正果。贾府张灯结彩，红妆十里。宝钗坐在凤冠霞帔之中，手中握着那枚金锁，心中五味杂陈。\n\n她赢了——以所有人的标准来看，她都赢了。她是宝二奶奶，是荣国府未来的当家主母。可是为什么，她的眼角有一滴泪悄然滑落？\n\n"好风凭借力，送我上青云。"她登上了青云，可那云端之上，是否真的有她想要的一切？\n\n洞房之中，宝玉揭开盖头的那一刻，看到的却是宝钗含泪的双眸。四目相对，千言万语化作一声叹息。', isEnding: true, poem: "可叹停机德，堪怜咏絮好。", choices: [] },
    xbaochai_wedding_02: { id: 'xbaochai_wedding_02', chapter: 5, title: '空闺独守', scene: 'hengwu_yuan', speaker: '旁白', text: '成亲之后的日子，并非宝钗想象的那般美好。宝玉虽然人在她身边，心却始终在别处——在潇湘馆的方向，在那个已经逝去的灵魂身上。\n\n宝钗没有怨言，也没有争闹。她只是默默地操持家务，照顾公婆，做一个完美的妻子。只有在夜深人静时，她才会取下金锁，对着月光发呆。\n\n"不离不弃，芳龄永继"——这八个字，究竟是祝福还是诅咒？她用一生的时间，也没能找到答案。\n\n"珍重芳姿昼掩门，自携手瓮灌苔盆。"', isEnding: true, poem: "珍重芳姿昼掩门，自携手瓮灌苔盆。", choices: [] },

    xbaochai_ch2_02: {
        id: 'xbaochai_ch2_02', chapter: 2, title: '冷香丸',
        scene: 'hengwu_yuan', speaker: '旁白',
        text: '宝钗取出冷香丸服下。这药以四季花蕊配以雨露霜雪调制而成，专治她的热毒之症。她常想：这冷香丸何尝不是她一生的隐喻？将满腔热忱用理智压制，外表冷若冰霜，内心却烈火般炽热。莺儿道："姑娘，太太说该去荣庆堂了。"宝钗整了整衣裳，将一切情绪收敛干净，恢复了那副端庄贤淑的模样。',
        choices: [
            { text: '顺从家族安排', next: 'xbaochai_ch2_03', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '开始思考自己的出路', next: 'xbaochai_ch2_03', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    xbaochai_ch2_03: {
        id: 'xbaochai_ch2_03', chapter: 2, title: '蘅芜夜思',
        scene: 'hengwu_yuan', speaker: '旁白',
        text: '夜深了，宝钗独坐蘅芜苑中。屋内陈设简朴，如雪洞一般——这是她有意为之，不愿让人看出她内心的波澜。她摩挲着金锁上的字，想起母亲的话："女儿当为薛家着想。"她又想起黛玉的泪眼，想起宝玉的纯真——她真的愿意做那枚金锁的傀儡吗？',
        choices: [
            { text: '接受命运的安排', next: 'xbaochai_ch2_04', effects: { 'attributes.wisdom': { add: 1 } } },
            { text: '内心挣扎，不甘被束缚', next: 'xbaochai_ch2_04', effects: { 'attributes.emotion': { add: 3 } } }
        ]
    },
    xbaochai_ch2_04: {
        id: 'xbaochai_ch2_04', chapter: 2, title: '帮探春理家',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '探春请宝钗帮忙理家。宝钗翻看账本，发现贾府的开支比她想象的还要严重。她提出了一系列改革建议，从裁减冗员到开源节流，条条切中要害。探春叹道："宝姐姐果然见识不凡。"然而宝钗心中明白——她之所以如此精通此道，是因为薛家的生意早已是她一手打理。她不是不懂世事的闺阁小姐，而是一个被家族重担压弯了腰的女子。',
        choices: [
            { text: '全力帮助探春改革', next: 'xbaochai_ch3_01', effects: { 'relationships.tanchun': { add: 5 }, 'attributes.wisdom': { add: 2 } } },
            { text: '点到为止，不愿太过出头', next: 'xbaochai_ch3_01', effects: { 'attributes.wisdom': { add: 1 }, 'attributes.charm': { add: 1 } } }
        ]
    },
    xbaochai_ch3_01: {
        id: 'xbaochai_ch3_01', chapter: 3, title: '命运抉择',
        scene: 'hengwu_yuan', speaker: '旁白',
        text: '宝钗面临抉择：是接受家族安排的婚姻，还是追寻自己内心真正的渴望？蘅芜苑中的藤萝在风中轻轻摇曳，似在等待她的决定。',
        textVariations: [
            { conditions: { 'attributes.wisdom': { min: 10 } }, text: '宝钗站在窗前，将一切看得清清楚楚。贾府的繁华不过是镜花水月，薛家的生意也日渐衰败。她知道，无论选哪条路，都不会轻松。但她也知道——她薛宝钗从不是一个会认输的人。"好风凭借力，送我上青云。"她轻声念着这句诗，眼中闪过一丝决绝。' },
            { conditions: { 'attributes.emotion': { min: 10 } }, text: '宝钗独坐蘅芜苑中，冷香丸的药效似乎越来越不管用了。她心中的热毒翻涌不息——那是对自由的渴望，对真情的向往，对被压抑了十七年的自我的呐喊。她望着金锁，忽然想将它摘下，远远地扔出去。然而她的手只是微微颤抖了一下，终究没有动。' },
            { conditions: { 'attributes.fortune': { max: 3 } }, text: '宝钗面临抉择之时，薛家却传来了坏消息——薛蟠又闯了祸，家中银两周转不灵。她苦笑：原来她连选择自己命运的权利都没有？不，正因为如此，她更要为自己搏一条路出来！' }
        ],
        choices: [
            { text: '接受金玉良缘', next: 'xbaochai_end_01', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '拒绝婚事，自立于世', next: 'xbaochai_end_02', effects: { 'attributes.emotion': { add: 3 } } },
            { text: '成全宝玉和黛玉', next: 'xbaochai_end_03', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '与黛玉联手，共同抗争命运', next: 'xbaochai_end_04', conditions: { 'flags.evt_daiyu_honest': true }, effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 3 }, 'relationships.ldaiyu': { add: 8 }, 'flags.alliance_daiyu': { set: true } } },
            { text: '挣脱金锁束缚，追寻自由', next: 'xbaochai_end_05', conditions: { 'flags.evt_reject_fate': true }, effects: { 'attributes.emotion': { add: 5 }, 'attributes.wisdom': { add: 2 }, 'flags.broke_free': { set: true } } },
            { text: '著书立说，以才学名动天下', next: 'xbaochai_ch4_01', effects: { 'attributes.talent': { add: 3 }, 'attributes.wisdom': { add: 2 }, 'flags.scholar_xbc': { set: true } } },
            { text: '经营薛家生意，女商人之路', next: 'xbaochai_ch4_02', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.fortune': { add: 3 }, 'flags.merchant_queen': { set: true } } },
            { text: '创办女学，教育兴邦', next: 'xbaochai_ch4_03', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.talent': { add: 2 }, 'flags.educator_path': { set: true } } },
            { text: '周旋权贵，以智谋立足', next: 'xbaochai_ch4_04', conditions: { 'attributes.wisdom': { min: 8 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.charm': { add: 3 }, 'flags.mastermind_path': { set: true } } }
        ]
    },
    xbaochai_end_01: { id: 'xbaochai_end_01', chapter: 5, title: '金玉良缘·终章', scene: 'rongguo_hall', speaker: '旁白', text: '宝钗嫁与宝玉为妻。然而洞房之夜，宝玉却不在房中。她独坐新房，烛影摇红。\n\n"珍重芳姿昼掩门，自携手瓮灌苔盆。胭脂洗出秋阶影，冰雪招来露砌魂。"\n\n她知道，她赢得了婚姻，却未必赢得了爱情。此后她以贤德持家，成为众人称道的宝二奶奶。然而每当夜深人静，她也会想起那个问题：这样的人生，究竟是不是自己想要的？她用冷香丸压住心中的热毒，正如她用理智压住了一生的渴望。到头来，金玉良缘不过是一场精致的囚笼。', isEnding: true, poem: "珍重芳姿昼掩门，自携手瓮灌苔盆。胭脂洗出秋阶影，冰雪招来露砌魂。", choices: [] },
    xbaochai_end_02: { id: 'xbaochai_end_02', chapter: 5, title: '破茧而出·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗拒绝了金玉良缘。她开始经营薛家的生意，以精明才干将家业打理得蒸蒸日上。\n\n"好风凭借力，送我上青云。"\n\n她常对人说："女子亦当有志，何必依附于男子？"她用行动证明了，女子同样可以撑起一片天。蘅芜苑中的异草藤萝，在阳光下舒展自如——正如她终于不再被冷香丸所束缚，让心中那团火自由地燃烧。她不再需要冷香丸——因为她的心，终于不再被压抑了。', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },
    xbaochai_end_03: { id: 'xbaochai_end_03', chapter: 5, title: '成全之美·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝钗选择了成全。她私下找到贾母，恳请成全木石前盟。在她的努力下，宝玉与黛玉得以结为连理。\n\n"淡极始知花更艳，愁多焉得玉无痕。"\n\n宝钗在婚礼上含笑祝福，心中虽有一丝苦涩，却更多的是释然。真正的爱不是占有，而是成全。她走出大观园，迎着阳光，第一次感到心中那股热毒消散了——原来，做自己想做的事，便是最好的良药。她终于明白，放下金锁，才能得到真正的自由。', isEnding: true, poem: "淡极始知花更艳，愁多焉得玉无痕。", choices: [] },

    shi_xiangyun_ch1_01: {
        id: 'shi_xiangyun_ch1_01', chapter: 1, title: '云来大观园',
        scene: 'daguan_yuan_gate', speaker: '旁白',
        text: '史湘云又来大观园了！她一路风尘仆仆，却精神抖擞，一进园门便大声笑道："爱哥哥！林姐姐！我来啦！"她的笑声如银铃般清脆。',
        textVariations: [
            { conditions: { 'attributes.emotion': { min: 8 } }, text: '史湘云又来大观园了！她一路风尘仆仆，却精神抖擞。然而当她看到宝玉和黛玉并肩而立的身影时，心中忽然涌起一股酸涩——他们两情相悦，而自己呢？她在史家寄人篱下，连个说话的人都没有。但她很快甩了甩头，将那些不快抛到脑后——"我史湘云，才不会为这些事愁眉苦脸呢！"' },
            { conditions: { 'attributes.charm': { min: 8 } }, text: '史湘云又来大观园了！她一进门便引来众人围观——不是因为她有多美，而是因为她的笑容实在太有感染力了。连最严肃的贾政见了她，嘴角都会不自觉地上扬。她就是这样一个女子：不需要刻意讨好，便能让所有人都喜欢她。' }
        ],
        choices: [
            { text: '去找宝玉玩耍', next: 'shi_xiangyun_ch1_02', effects: { 'relationships.jbaoyu': { add: 3 } } },
            { text: '给贾母请安', next: 'shi_xiangyun_ch1_02', effects: { 'relationships.jiamu': { add: 3 } } }
        ]
    },
    shi_xiangyun_ch1_02: {
        id: 'shi_xiangyun_ch1_02', chapter: 1, title: '烤鹿肉',
        scene: 'luxue_ting', speaker: '旁白',
        text: '湘云拉着宝玉去芦雪亭烤鹿肉。她撸起袖子，亲自动手，一面烤一面吃，满嘴油光，毫无大家闺秀的矜持。黛玉远远看着，笑道："哪里来的叫花子！"湘云回嘴道："你知道什么！是真名士自风流！我们这会子腥膻大吃大嚼，回来却是锦心绣口！"众人都笑了。湘云的豪爽，总是能让大家忘却烦恼。',
        choices: [
            { text: '与湘云一起大快朵颐', next: 'shi_xiangyun_ch2_01', effects: { 'relationships.shi_xiangyun': { add: 3 }, 'attributes.charm': { add: 1 } } },
            { text: '在一旁看热闹', next: 'shi_xiangyun_ch2_01', effects: { 'attributes.emotion': { add: 1 } } }
        ]
    },
    xiangyun_orig_01: { id: 'xiangyun_orig_01', chapter: 1, title: '史家夜话', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云在贾府住了几日后，不得不回史家。临别时她拉着宝玉的手道："爱哥哥，你不知道，我在史家过的是什么日子……"她说起自己在史家要做针线活到深夜，说起婶娘的刻薄，说起那些寄人篱下的屈辱。宝玉听得心疼不已，却也只能安慰道："你常来大观园就是了。"\n\n湘云走后，宝玉望着她的背影，心中暗暗发誓：一定要想办法帮这个妹妹摆脱困境。', choices: [{ text: '将此事记在心中', next: 'shi_xiangyun_ch2_01', effects: { 'attributes.emotion': { add: 2 }, 'relationships.shi_xiangyun': { add: 3 } } }] },
    xiangyun_orig_02: { id: 'xiangyun_orig_02', chapter: 2, title: '鹿肉大嚼', scene: 'daguan_yuan_gate', speaker: '旁白', text: '那日诗社聚会，湘云从家中带来了一块鹿肉。她大大咧咧地架起炭火烤了起来，香气四溢。黛玉掩鼻道："什么味道？腥膻死了！"湘云笑道："这是真正的野味！你们这些娇滴滴的千金小姐哪里懂得？"说着撕下一大块鹿肉塞进嘴里，吃得满嘴流油。\n\n宝玉看着她豪爽的样子，忍不住也尝了一口——果然鲜美异常。众人见状，纷纷加入进来。一时间，园中充满了烤肉的香气和欢声笑语。\n\n"惟大英雄能本色，是真名士自风流。"湘云一边吃一边吟道。这才是真正的名士风流啊。', choices: [{ text: '与湘云一同畅饮', next: 'shi_xiangyun_ch2_01', effects: { 'attributes.emotion': { add: 3 }, 'attributes.charm': { add: 1 } } }] },

    tanchun_orig_01: { id: 'tanchun_orig_01', chapter: 2, title: '探春理家', scene: 'qiushuang_zhai', speaker: '旁白', text: '凤姐小产养病期间，李纨、探春、宝钗三人协理荣国府家务。探春借此机会推行了一系列改革：裁减冗费、整顿账目、严查贪污……每一项都触动了既得利益者的神经。\n\n有人暗中骂她是"庶出的丫头"，有人明里给她使绊子。探春不为所动，冷笑道："我但凡是个男人，可以出得去，我必早走了，立一番事业。如今虽是女儿身，也要做出一番事业来给你们看！"\n\n她的改革初见成效，贾府的开支减少了三成。然而她也因此得罪了不少人——包括自己的生母赵姨娘和弟弟贾环。', textVariations: [{ conditions: { 'attributes.wisdom': { min: 8 } }, text: '探春在理家期间展现出了惊人的才干。她不仅裁减开支，还建立了一套新的管理制度——每笔支出都要有据可查，每个岗位都有明确的职责。连王熙凤看了都不得不佩服："三姑娘的手段，比我强多了。"' }], choices: [{ text: '继续深化改革', next: 'tanchun_ch3_01', effects: { 'attributes.wisdom': { add: 4 }, 'attributes.charm': { add: 1 } } }, { text: '适可而止，避免树敌太多', next: 'tanchun_ch3_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    tanchun_orig_02: { id: 'tanchun_orig_02', chapter: 3, title: '秋爽结社', scene: 'qiushuang_zhai', speaker: '旁白', text: '探春是最先提议成立诗社的人。那日她在秋爽斋中写了一封帖子，邀请众姐妹以诗会友。她对宝玉道："我们这些人，整日被关在这园子里，若不找点乐子，岂不要闷死？"宝玉拍手叫好。\n\n诗社成立后，探春取号"蕉下客"。黛玉笑问何意，探春道："我喜芭蕉之高洁，愿如芭蕉般挺立于世。"众人皆赞其志趣高雅。\n\n然而探春心中另有一番想法：这诗社不仅是玩乐，更是她凝聚人心、展示才华的平台。她要让大家看到——庶出的女儿，一样可以光芒万丈。', choices: [{ text: '将诗社发扬光大', next: 'tanchun_ch3_01', effects: { 'attributes.talent': { add: 2 }, 'attributes.charm': { add: 1 } } }] },

    feng_orig_01: { id: 'feng_orig_01', chapter: 1, title: '协理宁府', scene: 'ningguo_hall', speaker: '旁白', text: '宁国府秦可卿去世，贾珍请凤姐去帮忙操办丧事。凤姐欣然应允——这正是她展示才能的好机会。\n\n她一到宁府便立下规矩：每日卯正二刻点名，迟到者罚银；各司其职，不得推诿；账目日清月结，不得拖欠。原本乱成一锅粥的丧事，在她手中井井有条地运转起来。\n\n宁府上下无不服气。贾珍更是对她感激涕零："若非琏二奶奶，这丧事不知要如何收场！"凤姐得意地笑了——她王熙凤的本事，终于有了用武之地。', choices: [{ text: '借机扩大影响力', next: 'wangxifeng_ch3_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.fortune': { add: 2 } } }, { text: '适可而止，不张扬', next: 'wangxifeng_ch3_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    feng_orig_02: { id: 'feng_orig_02', chapter: 2, title: '弄权铁槛寺', scene: 'gufang_bridge', speaker: '旁白', text: '那日秦可卿出殡，送葬队伍路过铁槛寺。凤姐住在寺中，有老尼求她帮忙打一场官司——原来是有个财主想赖婚，老尼想借贾府之势压一压对方。\n\n凤姐听了，心中盘算：这事若是办成了，可得三千两银子；即便不成，也不损失什么。她当即答应下来，并以此为由索要了三千两作为"活动经费"。\n\n事后她拿着银子，心中既有得意又有不安——这笔钱来得太容易了，容易到让她有些心虚。可是谁在乎呢？在这贾府之中，不这样又如何生存？', choices: [{ text: '将钱收下', next: 'wangxifeng_ch3_01', effects: { 'attributes.fortune': { add: 5 }, 'attributes.wisdom': { add: -1 } } }, { text: '退还部分钱财', next: 'wangxifeng_ch3_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 2 } } }] },
    feng_orig_03: { id: 'feng_orig_03', chapter: 2, title: '尤二姐之死', scene: 'rongguo_hall', speaker: '旁白', text: '贾琏偷娶尤二姐的事终究瞒不住了。凤姐得知后，表面不动声色，暗中却已布下天罗地网。她将尤二姐接入府中，表面上对她极好，实则步步紧逼——先是削减她的用度，再是挑拨她与下人的关系，最后借故将她赶出府去。\n\n尤二姐不堪受辱，吞金自尽。\n\n消息传来时，凤姐正在对镜梳妆。她放下手中的梳子，望着镜中的自己——这张脸上，何时变得如此陌生？她做这一切是为了什么？为了维护自己的地位？还是因为心中那股无法遏制的嫉妒？\n\n"机关算尽太聪明，反误了卿卿性命。"她喃喃念着这句判词，第一次感到了彻骨的寒意。', textVariations: [{ conditions: { 'attributes.wisdom': { min: 7 } }, text: '尤二姐死后，凤姐独自坐在房中，久久没有说话。平儿在一旁小心翼翼地看着她，不敢出声。良久，凤姐忽然开口道："平儿，你说……我做错了吗？"平儿不敢回答。凤姐自嘲地笑了笑："算了，这世上哪有什么对错？不过是胜者为王罢了。"' }], choices: [{ text: '将愧疚压在心底', next: 'wangxifeng_ch3_01', effects: { 'attributes.emotion': { add: -2 }, 'attributes.wisdom': { add: 1 } } }, { text: '开始反思自己', next: 'wangxifeng_ch3_01', effects: { 'attributes.wisdom': { add: 3 }, 'flags.feng_reflect': true } }] },

    miaoyu_orig_01: { id: 'miaoyu_orig_01', chapter: 1, title: '妙玉奉茶', scene: 'gufang_bridge', speaker: '旁白', text: '那日贾母带众人来栊翠庵品茶。妙玉亲自烹茶，用的是收集的梅花上的雪水，泡的是五年前的老君眉。她先将茶捧给贾母，贾母喝了半盏便放下了；然后依次给刘姥姥、宝玉等人斟茶。\n\n轮到宝玉时，妙玉将自己的绿玉斗茶杯递给他使用。宝玉受宠若惊——他知道这意味着什么。黛玉在旁看在眼中，微微皱眉，却没有说什么。\n\n茶香袅袅中，妙玉的目光与宝玉短暂相接。那一瞬间，仿佛有无尽的话语在空气中流转——却又什么都没有说出口。\n\n"欲洁何曾洁，云空未必空。"妙玉低头看着手中的茶杯，心中泛起一丝涟漪。', choices: [{ text: '品茶沉思', next: 'miaoyu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    miaoyu_orig_02: { id: 'miaoyu_orig_02', chapter: 2, title: '槛外人语', scene: 'gufang_bridge', speaker: '旁白', text: '宝玉生日那天给妙玉下了帖子，上写"槛内人宝玉薰沐谨拜"。妙玉回了八字："槛外人妙玉肃拜"。宝玉不解其意，请教于邢岫烟，方知"槛外"乃佛家语，意为超脱尘俗之人。\n\n宝玉再去栊翠庵时，特意与妙玉谈论佛法。两人从《庄子》谈到《金刚经》，从红尘谈到彼岸。妙玉的言辞间透着一股清冷的智慧，让宝玉深深着迷。\n\n然而当话题触及情感时，妙玉总是巧妙地避开。她像一只蜻蜓，永远在水面上轻轻一点，从不深入水中。\n\n"气质美如兰，才华阜比仙。"宝玉望着她远去的背影，心中涌起一股说不清的感觉——这个女子，究竟是真正超脱了尘世，还是在用"出世"的方式逃避着什么？', choices: [{ text: '继续前往修行之路', next: 'miaoyu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }] },

    qingwen_orig_01: { id: 'qingwen_orig_01', chapter: 2, title: '晴雯撕扇', scene: 'yihong_yuan', speaker: '旁白', text: '那日晴雯不小心跌折了宝玉的扇子，宝玉回来后不但没生气，反而笑道："扇子原是摇的，你要撕着玩也可以。"晴雯听了，果然接过扇子嗤嗤撕了几把。黛玉在一旁看着，忍不住笑道："二爷这般惯着你，早晚把你惯坏了。"宝玉道："惯坏了也是我的晴雯。"\n\n那一刻，怡红院中充满了欢笑声。晴雯撕的不是扇子，而是她心中的委屈和不甘——在这个等级森严的世界里，她终于可以做一回真正的自己。\n\n"霁月难逢，彩云易散。心比天高，身为下贱。"晴雯笑着将碎扇子抛向空中，如同抛洒着自由的花瓣。', choices: [{ text: '与晴雯一同欢笑', next: 'qingwen_ch2_01', effects: { 'relationships.qingwen': { add: 5 }, 'attributes.emotion': { add: 3 } } }] },
    qingwen_orig_02: { id: 'qingwen_orig_02', chapter: 3, title: '补裘之夜', scene: 'yihong_yuan', speaker: '旁白', text: '深秋之夜，宝玉的雀金裘不慎烧了一个洞。全城的裁缝都束手无策，唯有晴雯认得这是"界线"之法，虽然病中仍咬牙接下了这活计。\n\n烛光下，晴雯伏在枕上一针一线地缝补。她的额头上渗出细密的汗珠，嘴唇因用力而发白，但眼神却专注而坚定。宝玉在一旁看得心疼不已："晴雯，歇一歇吧。"晴雯摇头："不行，明日二爷还要穿呢。"\n\n整整一夜，晴雯没有合眼。当她终于缝完最后一针时，整个人几乎虚脱。宝玉接过衣服，眼眶红了——这件衣服上，缝进去的不只是丝线，还有晴雯的一颗真心。\n\n"寿夭多因毁谤生，多情公子空牵念。"这一夜的付出，成了晴雯生命的转折点——从此之后，她的身体再也没能恢复过来。', textVariations: [{ conditions: { 'relationships.jbaoyu': { min: 50 } }, text: '晴雯为宝玉补雀金裘的那一夜，是她生命中最漫长也最充实的一夜。她知道自己的身子已经撑不了多久了，但她不在乎——能为宝玉做最后一件事，便是值得。当她缝完最后一针时，望向宝玉的目光中带着从未有过的温柔与释然。"' }], choices: [{ text: '好好照顾晴雯', next: 'qingwen_ch3_01', effects: { 'relationships.qingwen': { add: 8 }, 'attributes.emotion': { add: 3 } } }] },

    xiren_orig_01: { id: 'xiren_orig_01', chapter: 2, title: '袭人进言', scene: 'rongguo_hall', speaker: '旁白', text: '那日袭人趁宝玉不在，私下向王夫人进言。她跪在地上，将宝玉在大观园中的种种"不当行为"一一禀报：与姐妹们过于亲密、读杂书、不爱读书……最后她含泪道："太太，二爷还小，若不及时管教，将来怕是要走偏路的。"\n\n王夫人听后大为感动，握着袭人的手道："好孩子，你真是忠心。从今往后，你便是我的心腹了。"\n\n走出荣庆堂时，袭人的脚步有些沉重。她知道自己做了什么——她用自己的方式保护了宝玉，却也出卖了大观园中的姐妹们。尤其是晴雯……她知道，晴雯的日子怕是不多了。', choices: [{ text: '回到怡红院', next: 'xiren_ch2_01', effects: { 'attributes.wisdom': { add: 2 }, 'relationships.wangfuren': { add: 5 } } }] },
    xiren_orig_02: { id: 'xiren_orig_02', chapter: 3, title: '蒋玉菡', scene: 'yihong_yuan', speaker: '旁白', text: '那日蒋玉菡来拜访宝玉，恰好袭人在场。蒋玉菡温文尔雅，谈吐不俗，袭人不由得多看了他几眼。蒋玉菡告辞时，特意走到袭人面前，低声道："姑娘若有难处，可来找我。"说完留下了一方帕子。\n\n袭人握着那方帕子，心中翻涌不已。她想起自己入贾府以来的点点滴滴，想起王夫人的嘱托，想起宝玉的依赖……她的人生，似乎从来都不是自己能选择的。\n\n然而此刻，她忽然觉得——也许，还有另一条路可以走？\n\n"花气袭人知骤暖，鹊声穿树喜新晴。"她望着窗外的天空，第一次对未来产生了一丝期待。', choices: [{ text: '将帕子收好', next: 'xiren_ch3_01', effects: { 'attributes.emotion': { add: 2 } } }] },

    jiamu_orig_01: { id: 'jiamu_orig_01', chapter: 1, title: '元宵家宴', scene: 'rongguo_hall', speaker: '旁白', text: '元宵佳节，贾母设宴款待儿孙。席间她命宝玉和黛玉挨着自己坐，又拉着宝钗坐在另一边。她看着这三个孩子，心中百感交集——一个是自己的心头肉，一个是最疼爱的外孙女，一个是最贤惠的侄女。他们之间的纠葛，她又怎会看不懂？\n\n酒过三巡，贾母忽然开口道："你们三个，都是我最疼的孩子。我只希望一件事——不管将来如何，都不要互相伤害。"她说这话时，目光在三人之间流转，带着深深的忧虑。\n\n宝玉低下头，黛玉红了眼眶，宝钗垂下眼帘——他们都明白老太太的意思，也都明白这件事有多么难以做到。', choices: [{ text: '默默铭记祖母的话', next: 'jiamu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    jiamu_orig_02: { id: 'jiamu_orig_02', chapter: 2, title: '清虚观打醮', scene: 'daguan_yuan_gate', speaker: '旁白', text: '那日贾母带领众人去清虚观打醮。张道士当众要为宝玉提亲，惹得宝玉十分不快。贾母挡了回去，却在回程途中对宝玉道："我的儿，你还小，这些事不急。但是你要记住——婚姻大事，关乎一生幸福，不可草率。"\n\n宝玉点头称是，心中却在想：我已经知道我要的是谁了。只是那个人……能不能得到，不由我说了算。\n\n贾母看着他倔强的侧脸，轻轻叹了口气。她何尝不知道宝玉的心思？可她更知道，这条路有多难走。', choices: [{ text: '回到贾府', next: 'jiamu_ch2_01', effects: { 'attributes.wisdom': { add: 1 } } }] },

    cross_orig_01: { id: 'cross_orig_01', chapter: 2, title: '芦雪庵联诗', scene: 'daguan_yuan_gate', speaker: '旁白', text: '大雪纷飞之日，众姐妹齐聚芦雪庵联诗。黛玉、宝钗、湘云、探春……一个个才情横溢，佳句频出。宝玉夹在其中，虽不是最出色的，却是最投入的一个。\n\n"一夜北风紧，开门雪尚飘。"湘云起句。\n\n"入泥怜洁白，匝地惜琼瑶。"黛玉接道。\n\n"有意荣枯草，无心饰萎苕。"宝钗续上。\n\n诗句在风雪中飘荡，如同众人的心声。这一刻，没有金玉之争，没有嫡庶之别，只有纯粹的才情与友谊。\n\n然而当联诗结束，众人各自散去时，那种短暂的和谐也随之消散——明天，一切又将回到原来的样子。', choices: [{ text: '珍惜这份难得的和谐', next: 'baoyu_ch2_01', effects: { 'attributes.talent': { add: 2 }, 'attributes.emotion': { add: 2 } } }] },
    cross_orig_02: { id: 'cross_orig_02', chapter: 3, title: '中秋夜宴', scene: 'daguan_yuan_gate', speaker: '旁白', text: '中秋之夜，贾母在凸碧山庄设宴赏月。月光如水，桂花飘香。众人围坐在一起，吃月饼、赏明月、吟诗作对。\n\n黛玉与湘云在凹晶馆联句，作出了"寒塘渡鹤影，冷月葬花魂"的千古绝唱。贾母听了，沉默许久，叹道："好是好……只是太悲了些。"\n\n那一夜，所有人都沉浸在一种奇异的氛围中——明明是团圆的节日，每个人心中却各有各的惆怅。月亮圆满无缺，人间却总有缺憾。\n\n"团圆莫忆散离苦，此夜须教月更明。"宝玉望着天上的明月，想起了所有他爱的人——愿他们都能平安、快乐、不被命运所伤。', choices: [{ text: '将这份美好藏在心底', next: 'baoyu_ch3_01', effects: { 'attributes.emotion': { add: 3 }, 'attributes.wisdom': { add: 1 } } }] },
    cross_orig_03: { id: 'cross_orig_03', chapter: 3, title: '抄检大观园', scene: 'daguan_yuan_gate', speaker: '旁白', text: '王夫人下令抄检大观园，搜查各房中的"违禁之物"。搜到潇湘馆时，只搜出了一些旧诗稿和几方旧帕子；搜到怡红院时，晴雯的箱子被翻了个底朝天，搜出了些无关紧要的小玩意儿。\n\n然而这次抄检的影响远不止于此——它打破了园中最后的安宁，让每个人都感受到了威胁。黛玉更加封闭了自己，晴雯变得更加愤世嫉俗，宝钗则以"避嫌"为由搬出了蘅芜苑。\n\n大观园，从此不再是从前那个世外桃源了。\n\n"三春去后诸芳尽，各自须寻各自门。"这场抄检，预示着大观园时代的终结——美好的事物，终将消散。', choices: [{ text: '面对变局', next: 'baoyu_ch3_01', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.emotion': { add: -1 } } }] },

    shi_xiangyun_ch2_01: {
        id: 'shi_xiangyun_ch2_01', chapter: 2, title: '醉眠芍药',
        scene: 'garden_path', speaker: '旁白',
        text: '诗社聚会后，湘云豪饮了几杯酒，不觉醉了。她独自走到芍药花丛中，在一块青石上躺下便睡着了。众人找到她时——只见她卧于石上，四面芍药花飞了一身，满头满脸衣襟上都是红香散乱，手中的扇子被落花埋了半截。一群蜜蜂蝴蝶闹嚷嚷地围着她飞，她口中犹作睡语说酒令。众人看了，又是爱怜又是好笑。',
        choices: [
            { text: '唤醒湘云', next: 'shi_xiangyun_ch2_02', effects: { 'attributes.charm': { add: 1 } } },
            { text: '让她继续睡', next: 'shi_xiangyun_ch2_02', effects: { 'attributes.emotion': { add: 1 } } }
        ]
    },
    shi_xiangyun_ch2_02: {
        id: 'shi_xiangyun_ch2_02', chapter: 2, title: '对菊联诗',
        scene: 'luxue_ting', speaker: '旁白',
        text: '湘云酒醒后，精神更胜从前。她与黛玉对菊联诗，才思敏捷，出口成章。湘云道："萧疏白发不盈颠，守阁清灯半壁莲。"黛玉接道："满纸自怜题素怨，片言谁解诉秋心。"两人你来我往，旗鼓相当，众人叹为观止。然而联诗之后，湘云忽然沉默了——她想起自己在史家的处境，不知何时又要被叫回去。',
        choices: [
            { text: '向贾母请求长住', next: 'shi_xiangyun_ch2_03', effects: { 'relationships.jiamu': { add: 5 } } },
            { text: '暗自神伤', next: 'shi_xiangyun_ch2_03', effects: { 'attributes.emotion': { add: 2 } } }
        ]
    },
    shi_xiangyun_ch2_03: {
        id: 'shi_xiangyun_ch2_03', chapter: 2, title: '柳絮词',
        scene: 'luxue_ting', speaker: '旁白',
        text: '诗社以柳絮为题，众人各展才情。黛玉的《唐多令》凄美动人，宝钗的《临江仙》大气磅礴。轮到湘云时，她一挥而就："也宜墙角也宜盆，花因喜洁难寻偶。"众人皆叹其才思敏捷。宝钗笑道："到底湘云爽利。"湘云却望着窗外飘飞的柳絮，心中暗想：这柳絮随风飘零，何其像自己？',
        choices: [
            { text: '以诗才赢得尊重', next: 'shi_xiangyun_ch3_01', effects: { 'attributes.talent': { add: 2 }, 'attributes.charm': { add: 1 } } },
            { text: '暗下决心要自立', next: 'shi_xiangyun_ch3_01', effects: { 'attributes.wisdom': { add: 3 } } }
        ]
    },
    shi_xiangyun_ch3_01: {
        id: 'shi_xiangyun_ch3_01', chapter: 3, title: '命运抉择',
        scene: 'daguan_yuan_gate', speaker: '旁白',
        text: '史家来人催湘云回去。她站在大观园门口，面临抉择：是乖乖回史家继续隐忍，还是寻找一条属于自己的路？',
        textVariations: [
            { conditions: { 'attributes.wisdom': { min: 8 } }, text: '史家来人催湘云回去。她站在大观园门口，心中已有计较——回史家不过是重入牢笼，但若不回去，又能去哪里？她忽然想起自己曾在诗社中写过"也宜墙角也宜盆"，心中一亮：柳絮尚能随风而起，我史湘云为何不能？' },
            { conditions: { 'attributes.charm': { min: 8 } }, text: '史家来人催湘云回去。她却笑嘻嘻地对来人道："急什么？让我再和姐妹们聚一聚。"她转身回到园中，与每一个人拥抱告别。她的笑容依旧灿烂，但眼中已有了从前的坚定——无论去哪里，她都要活得精彩。' }
        ],
        choices: [
            { text: '回史家隐忍', next: 'shi_xiangyun_end_01', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '请求长住大观园', next: 'shi_xiangyun_end_02', effects: { 'attributes.charm': { add: 2 } } },
            { text: '自立自强，闯出一片天', next: 'shi_xiangyun_end_03', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '以才学自立，不靠任何人', next: 'shi_xiangyun_end_04', conditions: { 'flags.evt_resolve_independent': true }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 }, 'flags.independent_path': { set: true } } },
            { text: '以诗才名动京城', next: 'shi_xiangyun_end_05', conditions: { 'flags.evt_poetry_win': true }, effects: { 'attributes.talent': { add: 5 }, 'attributes.charm': { add: 3 }, 'flags.poet_fame': { set: true } } },
            { text: '仗剑江湖，行侠四方', next: 'xiangyun_ch4_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.charm': { add: 3 }, 'flags.wanderer_path': { set: true } } },
            { text: '女扮男装，从军建功', next: 'xiangyun_ch4_02', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 2 }, 'flags.warrior_path': { set: true } } },
            { text: '以茶道经商，另辟蹊径', next: 'xiangyun_ch4_03', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.fortune': { add: 2 }, 'flags.tea_merchant': { set: true } } },
            { text: '创办书院，教书育人', next: 'xiangyun_ch4_04', conditions: { 'attributes.talent': { min: 7 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.talent': { add: 3 }, 'flags.academy_founder': { set: true } } }
        ]
    },
    shi_xiangyun_end_01: { id: 'shi_xiangyun_end_01', chapter: 5, title: '寒塘鹤影·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云回到了史家，继续过着寄人篱下的生活。她依然乐观开朗，然而命运弄人，丈夫英年早逝。\n\n"寒塘渡鹤影，冷月葬花魂。"\n\n这便是她一生的写照——如一只孤鹤，在寒塘中独自徘徊。然而即便如此，她从未后悔——因为她知道，在大观园的那些日子，是她一生中最快乐的时光。她常在月下独酌，回忆那些与姐妹们笑闹的日子，嘴角仍会浮起微笑。', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },
    shi_xiangyun_end_02: { id: 'shi_xiangyun_end_02', chapter: 5, title: '园中长住·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '贾母做主让湘云长住大观园。她与姐妹们日日吟诗作对，夜夜赏月品茗。\n\n"萧疏白发不盈颠，守阁清灯半壁莲。"\n\n后来她嫁给了一位志同道合的书生，两人琴瑟和鸣，传为佳话。她常说："有老祖宗和姐妹们在，我便是世上最幸福的人了。"那个曾经咬舌将"二"说成"爱"的女孩，终于找到了属于自己的归宿。', isEnding: true, poem: "萧疏白发不盈颠，守阁清灯半壁莲。", choices: [] },
    shi_xiangyun_end_03: { id: 'shi_xiangyun_end_03', chapter: 5, title: '云中白鹤·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云决定不再依赖任何人。她利用在贾府学到的人脉和见识，在商界站稳了脚跟。\n\n"也宜墙角也宜盆，花因喜洁难寻偶。"\n\n她常说："我史湘云，偏不信女子不如男！"她如一只白鹤，终于冲破了樊笼，在广阔的天地间自由翱翔。那个曾经在芍药花丛中醉眠的女孩，如今已成为一个让所有人刮目相看的女子。', isEnding: true, poem: "也宜墙角也宜盆，花因喜洁难寻偶。", choices: [] },

    jiamu_ch1_01: { id: 'jiamu_ch1_01', chapter: 1, title: '荣华暮年', scene: 'rongguo_hall', speaker: '旁白', text: '贾母端坐荣庆堂上，虽已年过七旬，却精神矍铄。她看着满堂儿孙，心中感慨万千。贾府百年基业，如今虽表面风光，内里却已渐渐空虚。她最放心不下的，是宝玉和黛玉。这两个孩子的心事，她看得比谁都清楚。今日她要做一个重要的决定。', textVariations: [{ conditions: { 'attributes.wisdom': { min: 8 } }, text: '贾母端坐荣庆堂上，目光如炬。她不仅看到了贾府表面的繁华，更看到了内里的千疮百孔。她心中暗暗盘算：若再不想办法，这百年基业怕是要毁于一旦了。她最疼爱的两个孩子——宝玉和黛玉，又该何去何从？她必须在他们之前做出决断。' }, { conditions: { 'attributes.emotion': { min: 8 } }, text: '贾母端坐荣庆堂上，望着满堂儿孙，心中涌起一股难以言说的情绪。她想起了年轻时的自己、想起了女儿贾敏、想起了那些已经逝去的亲人……她的眼眶微微泛红。这贾府的繁华，她守了一辈子，可到头来又能留住什么呢？' }], choices: [{ text: '召集家人商议婚事', next: 'jiamu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '先去看黛玉', next: 'jiamu_ch1_02', effects: { 'relationships.ldaiyu': { add: 3 } } }] },
    jiamu_ch1_02: { id: 'jiamu_ch1_02', chapter: 1, title: '探望黛玉', scene: 'xiaoxiang_guan', speaker: '旁白', text: '贾母来到潇湘馆，见黛玉正在窗前读书。黛玉见外祖母来了，连忙起身行礼。贾母拉着她的手，仔细端详，叹道："我的儿，你瘦了。"黛玉红了眼眶，低声道："老祖宗，我很好。"贾母心中暗暗叹息——这孩子与她母亲当年何其相似，都是这般才情出众、多愁善感。她暗暗下定决心，一定要为黛玉安排一个好归宿。', choices: [{ text: '召集家人商议婚事', next: 'jiamu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    jiamu_ch2_01: { id: 'jiamu_ch2_01', chapter: 2, title: '家族会议', scene: 'rongguo_hall', speaker: '旁白', text: '贾母召集众人商议宝玉婚事。王夫人道："宝钗稳重贤惠，与宝玉正是良配。"贾母沉吟不语。她何尝不知宝玉与黛玉的情意？但黛玉体弱多病，恐非长寿之相；宝钗端庄贤淑，更能辅佐宝玉。然而她又想起黛玉的母亲——她最疼爱的女儿贾敏，若她在天有灵，定不愿看到女儿受委屈。', choices: [{ text: '成全木石前盟', next: 'jiamu_ch2_02a', effects: { 'relationships.ldaiyu': { add: 5 } } }, { text: '决定金玉良缘', next: 'jiamu_ch2_02b', effects: { 'relationships.xbaochai': { add: 3 } } }, { text: '暂缓决定，观察形势', next: 'jiamu_ch2_02c', effects: { 'attributes.wisdom': { add: 2 } } }] },
    jiamu_ch2_02a: { id: 'jiamu_ch2_02a', chapter: 2, title: '木石之议', scene: 'rongguo_hall', speaker: '旁白', text: '贾母拍板道："宝玉和黛玉的事，我早有主意。他们两个从小一处长大，情投意合，我看着心里欢喜。"王夫人面露难色，欲言又止。贾母又道："你们不必多言，这件事就这么定了。"黛玉在屏风后听到此言，泪如雨下——外祖母终究是疼她的。', choices: [{ text: '立刻宣布婚期', next: 'jiamu_end_01', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.emotion': { add: 3 } } }, { text: '先观察一段时间再定', next: 'jiamu_ch3_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    jiamu_ch2_02b: { id: 'jiamu_ch2_02b', chapter: 2, title: '金玉之议', scene: 'rongguo_hall', speaker: '旁白', text: '贾母叹道："宝钗这孩子，我是极喜欢的。她稳重贤惠，与宝玉正是良配。"王夫人闻言大喜，连声附和。然而贾母心中仍有不安——她看到了黛玉眼中的绝望，那目光如刀，刺得她心疼。', choices: [{ text: '坚持金玉良缘', next: 'jiamu_end_02', effects: { 'relationships.xbaochai': { add: 5 } } }, { text: '心中犹豫，暂不定论', next: 'jiamu_ch3_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    jiamu_ch2_02c: { id: 'jiamu_ch2_02c', chapter: 2, title: '静观其变', scene: 'rongguo_hall', speaker: '旁白', text: '贾母道："孩子们的事，不必急于一时。让他们再相处些日子，我自会做主。"众人不敢再言。贾母心中暗想：她要看看到底谁更适合宝玉——是才情出众却体弱多病的黛玉，还是端庄贤淑却缺乏灵气的宝钗？', choices: [{ text: '暗中考察两个女孩', next: 'jiamu_ch3_01', effects: { 'attributes.wisdom': { add: 3 } } }] },
    jiamu_ch3_01: { id: 'jiamu_ch3_01', chapter: 3, title: '暮年抉择', scene: 'rongguo_hall', speaker: '旁白', text: '贾母夜不能寐，她知道自己的时日无多。贾府的衰败已不可逆转，她必须在有生之年为宝玉和黛玉安排好一切。她想起自己年轻时也是这般——在礼教与真情之间挣扎了一辈子。如今，她有机会为孙辈做出不同的选择。', choices: [{ text: '成全木石前盟', next: 'jiamu_end_01', effects: { 'relationships.ldaiyu': { add: 5 }, 'attributes.emotion': { add: 3 } } }, { text: '决定金玉良缘', next: 'jiamu_end_02', effects: { 'relationships.xbaochai': { add: 3 } } }, { text: '暂缓决定，观察形势', next: 'jiamu_end_03', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '以家族存亡为重，联姻自救', next: 'jiamu_end_04', conditions: { 'flags.evt_family_warning': true }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.family_first': { set: true } } }, { text: '暗中调查，以真相决断', next: 'jiamu_end_05', conditions: { 'flags.evt_secret_investigate': true }, effects: { 'attributes.wisdom': { add: 5 }, 'flags.truth_seeker': { set: true } } },
            { text: '暗中布局，为孙辈铺路', next: 'jiamu_ch2_03', effects: { 'attributes.wisdom': { add: 3 }, 'flags.secret_planning': { set: true } } },
            { text: '召集姐妹联手自救', next: 'cross_ch1_01', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 5 }, 'flags.alliance_formed': { set: true } } }
        ] },
    jiamu_end_01: { id: 'jiamu_end_01', chapter: 5, title: '成全·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母力排众议，成全了宝玉与黛玉。宝玉与黛玉终成眷属，大观园中一片喜气。\n\n"满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？"\n\n贾母看着两个孩子的笑脸，老怀大慰。她终于可以安心了——她最疼爱的女儿贾敏若在天有灵，也该含笑九泉了。她拉着黛玉的手道："好孩子，以后这里就是你的家。"黛玉泪如雨下，伏在贾母膝上，久久不语。', isEnding: true, poem: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", choices: [] },
    jiamu_end_02: { id: 'jiamu_end_02', chapter: 5, title: '权衡·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母选择了金玉良缘。婚事定下后，黛玉病势加重，贾母心中愧疚。\n\n"世人都晓神仙好，惟有功名忘不了！"\n\n她知道，她做了一个理性的决定，却未必是一个正确的决定。临终前，她拉着黛玉的手道："我的儿，祖母对不住你……"黛玉含泪摇头，却说不出一句话来。贾母带着遗憾离开了人世——她这一生，终究没能为最疼爱的两个孩子做出最好的安排。', isEnding: true, poem: "世人都晓神仙好，惟有功名忘不了！", choices: [] },
    jiamu_end_03: { id: 'jiamu_end_03', chapter: 5, title: '未决·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母选择了暂缓。然而时间不等人，贾府的衰败来得更快。\n\n"好一似食尽鸟投林，落了片白茫茫大地真干净。"\n\n抄家之日，贾母临终前拉着宝玉的手道："我的儿，祖母对不住你……"她终究没能为最疼爱的两个孩子做出最好的安排。她闭上眼睛的那一刻，仿佛看到了女儿贾敏在向她招手——也许在那个世界，一切遗憾都能得到弥补。', isEnding: true, poem: "好一似食尽鸟投林，落了片白茫茫大地真干净。", choices: [] },
    jiamu_end_04: { id: 'jiamu_end_04', chapter: 5, title: '联姻自救·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母以家族存亡为重，决定与南安王府联姻。她将探春远嫁南安王府，换取了贾府的暂时安宁。\n\n"一帆风雨路三千，把骨肉家园齐来抛闪。"\n\n她心中愧疚，却也知道这是唯一的出路。她用探春的牺牲换来了贾府的延续，用宝钗的贤惠换来了宝玉的安稳。她是一个好的当家人，却未必是一个好的祖母。临终前她叹道："这世上的事，哪有十全十美的？"', isEnding: true, poem: "一帆风雨路三千，把骨肉家园齐来抛闪。", choices: [] },
    jiamu_end_05: { id: 'jiamu_end_05', chapter: 5, title: '真相大白·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母暗中调查，发现了王熙凤中饱私囊、王夫人暗中排挤黛玉的真相。她大怒之下，当众宣布了调查结果。\n\n"假作真时真亦假，无为有处有还无。"\n\n她清洗了贾府中的蛀虫，还了黛玉清白，将管家之权交给了探春和李纨。她终于以雷霆手段挽救了贾府，也为自己最疼爱的孩子们铺平了道路。那个曾经犹豫不决的老太太，在最后关头展现出了惊人的魄力。', isEnding: true, poem: "假作真时真亦假，无为有处有还无。", choices: [] },

    tanchun_ch1_01: { id: 'tanchun_ch1_01', chapter: 1, title: '秋爽立志', scene: 'qiushuang_zhai', speaker: '旁白', text: '贾探春独坐秋爽斋中，案上大观窑的大盘、颜鲁公的对联，处处显出三小姐的阔朗大气。她正在翻看账本，发现贾府开支巨大，入不敷出。正想着，平儿来传话，说凤姐身体不适，请三姑娘帮忙料理家务。探春眼中一亮——这或许就是她等待已久的机会。', textVariations: [{ conditions: { 'attributes.wisdom': { min: 8 } }, text: '贾探春独坐秋爽斋中，翻看账本。她不仅看到了贾府的财务危机，更看到了一个机会——一个证明自己能力的机会。她虽是庶出，却从不甘心居于人下。"我但凡是个男人，可以出得去，我必早走了，立一番事业。"这句话她已在心中默念了无数遍。' }], choices: [{ text: '欣然应允', next: 'tanchun_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '谨慎考虑', next: 'tanchun_ch2_01', effects: { 'attributes.wisdom': { add: 3 } } }] },
    tanchun_ch2_01: { id: 'tanchun_ch2_01', chapter: 2, title: '代凤理家', scene: 'rongguo_hall', speaker: '旁白', text: '探春代凤姐理家，大刀阔斧地推行改革。她裁减不必要的开支，将大观园中的田地花木承包给专人管理。她道："我但凡是个男人，可以出得去，我必早走了，立一番事业。"然而赵姨娘闹上门来，骂她不认亲娘。探春正色道："我认的是理，不是亲！"她的眼中含着泪，却绝不退缩。', choices: [{ text: '坚持改革', next: 'tanchun_ch2_02', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '适当妥协', next: 'tanchun_ch2_02', effects: { 'attributes.wisdom': { add: 3 } } }] },
    tanchun_ch2_02: { id: 'tanchun_ch2_02', chapter: 2, title: '秋爽夜思', scene: 'qiushuang_zhai', speaker: '旁白', text: '夜深了，探春独坐秋爽斋中，回想着白日里赵姨娘的闹腾。她虽嘴上强硬，心中却何尝不痛？她何尝不想认那个亲娘？可赵姨娘的所作所为，实在让她寒心。她提笔写道："一帆风雨路三千，把骨肉家园齐来抛闪。"写完，她将纸揉成一团，掷入纸篓。她不允许自己软弱。', choices: [{ text: '继续推行改革', next: 'tanchun_ch2_03', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '寻求宝钗帮助', next: 'tanchun_ch2_03', effects: { 'relationships.xbaochai': { add: 3 } } }] },
    tanchun_ch2_03: { id: 'tanchun_ch2_03', chapter: 2, title: '兴利除弊', scene: 'rongguo_hall', speaker: '旁白', text: '探春将大观园中的田地花木承包给专人管理，每年可省下四百两银子。众人都叹她精明，但赵姨娘又在背后嚼舌根："一个庶出的丫头，也配管事？"探春听到这话，攥紧了拳头，却只是冷冷一笑。她知道，唯有做出成绩，才能堵住所有人的嘴。', choices: [{ text: '加大改革力度', next: 'tanchun_ch3_01', effects: { 'attributes.wisdom': { add: 3 } } }, { text: '稳扎稳打', next: 'tanchun_ch3_01', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.charm': { add: 1 } } } ] },
    tanchun_ch3_01: {
        id: 'tanchun_ch3_01', chapter: 3, title: '命运抉择',
        scene: 'qiushuang_zhai', speaker: '旁白',
        text: '朝中传来消息，南安太妃要选一位贾家小姐和亲远嫁。探春心中明白，以她在贾府的地位——庶出之女——她是最可能被选中的人。她攥紧了拳头，心中不甘：凭什么她的命运要由别人来决定？',
        choices: [
            { text: '远嫁和亲', next: 'tanchun_end_01', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '留在贾府继续改革', next: 'tanchun_end_02', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '主动寻找新出路', next: 'tanchun_end_03', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '暗中筹谋，扭转乾坤', next: 'tanchun_end_04', conditions: { 'flags.evt_plan_escape': true }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 2 }, 'flags.outsmart_fate': { set: true } } },
            { text: '以改革功绩赢得话语权', next: 'tanchun_end_05', conditions: { 'flags.evt_reform_persist': true }, effects: { 'attributes.wisdom': { add: 5 }, 'relationships.jiamu': { add: 5 }, 'flags.reform_hero': { set: true } } },
            { text: '出海经商，另辟天地', next: 'tanchun_ch4_01', effects: { 'attributes.wisdom': { add: 4 }, 'attributes.fortune': { add: 2 }, 'flags.sea_path': { set: true } } },
            { text: '入朝为官，改革朝政', next: 'tanchun_ch4_02', conditions: { 'attributes.wisdom': { min: 8 } }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 }, 'flags.official_path': { set: true } } },
            { text: '以智改命，反制阴谋', next: 'tanchun_ch4_03', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.charm': { add: 2 }, 'flags.intelligence_path': { set: true } } },
            { text: '创办女学，教育兴邦', next: 'tanchun_ch4_04', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.talent': { add: 2 }, 'flags.reform_educator': { set: true } } }
        ]
    },
    tanchun_end_01: { id: 'tanchun_end_01', chapter: 5, title: '千里东风·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '探春远嫁他乡，如断线风筝。\n\n"一帆风雨路三千，把骨肉家园齐来抛闪。恐哭损残年，告爹娘，休把儿悬念。"\n\n她知道，此生恐怕再难回来了。然而她并未消沉——她在异国他乡，以才智赢得了尊重，将一片荒芜之地治理得井井有条。她用行动证明：贾探春，到哪里都是贾探春。每当春风吹起，她都会望向东方——那里有她的大观园，有她的姐妹们，有她再也回不去的青春。', isEnding: true, poem: "一帆风雨路三千，把骨肉家园齐来抛闪。恐哭损残年，告爹娘，休把儿悬念。", choices: [] },
    tanchun_end_02: { id: 'tanchun_end_02', chapter: 5, title: '力挽狂澜·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春联合宝钗、李纨，三人同心协力，竟将贾府从衰败的边缘拉了回来。\n\n"我但凡是个男人，可以出得去，我必早走了，立一番事业。"\n\n她用行动证明了自己的价值，也让所有人看到：庶出之女，一样可以撑起半边天。贾府虽不复当年之盛，却至少保住了根基。探春站在秋爽斋中，望着窗外的秋色，终于露出了久违的笑容。', isEnding: true, poem: "我但凡是个男人，可以出得去，我必早走了，立一番事业。", choices: [] },
    tanchun_end_03: { id: 'tanchun_end_03', chapter: 5, title: '破局而出·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '探春离开贾府，在京城开设了一间书坊，专门刊印女子诗文。\n\n"秋容浅淡映重门，七节攒成雪满盆。出浴太真冰作影，捧心西子玉为魂。"\n\n她常说："我贾探春，不靠贾府的招牌，一样能活出精彩。"她的书坊成为了京城才女们的聚集地，她终于找到了属于自己的舞台。那个曾经被庶出身份所困的女孩，如今已成为京城最负盛名的女出版家。', isEnding: true, poem: "秋容浅淡映重门，七节攒成雪满盆。出浴太真冰作影，捧心西子玉为魂。", choices: [] },

    wangxifeng_ch1_01: { id: 'wangxifeng_ch1_01', chapter: 1, title: '凤姐当家', scene: 'rongguo_hall', speaker: '旁白', text: '王熙凤一大早便在荣庆堂中理事。她手握对牌，翻看账本，将一应大小事务安排得井井有条。她深知贾府表面风光，内里早已千疮百孔，但她自有手段，总能拆东墙补西墙，将场面撑住。', textVariations: [{ conditions: { 'attributes.wisdom': { min: 8 } }, text: '王熙凤一大早便在荣庆堂中理事。她翻看账本时，眉头越皱越紧——贾府的亏空比她想象的还要严重。她心中暗暗盘算：若再不想办法，这荣国府怕是撑不过三年了。"机关算尽太聪明"——可若不算计，又该如何？' }, { conditions: { 'attributes.health': { max: 4 } }, text: '王熙凤一大早便在荣庆堂中理事，却感到一阵眩晕袭来。她扶着额头，强撑着继续看账本。平儿在一旁担忧地看着她："奶奶，您身子不好，歇一歇吧。"凤姐摆摆手："歇什么？这一大家子人还等着我呢。"' }], choices: [{ text: '铁腕管理，开源节流', next: 'wangxifeng_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '暗中留后路', next: 'wangxifeng_ch2_01', effects: { 'attributes.wisdom': { add: 3 } } }] },
    wangxifeng_ch2_01: { id: 'wangxifeng_ch2_01', chapter: 2, title: '铁腕手段', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐以雷霆手段处理家务，对下人严苛，对对手狠辣。然而她的身体却每况愈下，夫妻关系也日渐冷淡。贾琏在外偷娶尤二姐之事被她发现，她虽面上不动声色，心中却已怒火中烧。她暗暗筹谋，要将这个威胁连根拔起。', choices: [{ text: '继续铁腕，除掉威胁', next: 'wangxifeng_ch2_02', effects: { 'attributes.wisdom': { add: 1 } } }, { text: '开始反思自己的所作所为', next: 'wangxifeng_ch2_02', effects: { 'attributes.wisdom': { add: 3 } } }] },
    wangxifeng_ch2_02: { id: 'wangxifeng_ch2_02', chapter: 2, title: '病中惊梦', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐病倒在床，高烧不退。恍惚中，她梦见秦可卿来劝她："凤辣子，你什么都算到了，唯独没算到自己的命。趁还有时间，给自己留条后路吧。"凤姐惊出一身冷汗，病好之后，她看着镜中憔悴的自己，第一次感到了恐惧。', choices: [{ text: '继续算计', next: 'wangxifeng_ch2_03', effects: { 'attributes.wisdom': { add: 1 } } }, { text: '放下执念', next: 'wangxifeng_ch2_03', effects: { 'attributes.emotion': { add: 3 } } }] },
    wangxifeng_ch2_03: { id: 'wangxifeng_ch2_03', chapter: 2, title: '暗流涌动', scene: 'rongguo_hall', speaker: '旁白', text: '尤二姐之事终于了结，但凤姐的心中并无快意。她看着空荡荡的院子，忽然觉得一切索然无味。平儿端来一碗燕窝粥，轻声道："奶奶，您该歇歇了。"凤姐接过碗，手微微发抖——她忽然意识到，自己已经很久没有好好吃过一顿饭了。', choices: [{ text: '开始收手', next: 'wangxifeng_ch3_01', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.health': { add: 1 } } }, { text: '不甘心就此收手', next: 'wangxifeng_ch3_01', effects: { 'attributes.emotion': { add: 1 } } } ] },
    wangxifeng_ch3_01: {
        id: 'wangxifeng_ch3_01', chapter: 3, title: '命运抉择',
        scene: 'rongguo_hall', speaker: '旁白',
        text: '凤姐面临抉择：是继续在权力游戏中挣扎，还是放下一切寻找救赎？"机关算尽太聪明，反误了卿卿性命。"秦可卿的话在她耳边回响。',
        choices: [
            { text: '继续算计', next: 'wangxifeng_end_01', effects: { 'attributes.wisdom': { add: 1 } } },
            { text: '放下执念，赎罪自救', next: 'wangxifeng_end_02', effects: { 'attributes.emotion': { add: 3 } } },
            { text: '将功补过，挽救贾府', next: 'wangxifeng_end_03', conditions: { 'flags.evt_redeem_wxf': true }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 }, 'flags.redemption': { set: true } } },
            { text: '收手从良，安度余生', next: 'wangxifeng_end_04', conditions: { 'flags.evt_usury_stop': true }, effects: { 'attributes.wisdom': { add: 3 }, 'attributes.health': { add: 2 }, 'flags.reformed': { set: true } } },
            { text: '借助王家关系，谋得朝廷差事', next: 'wangxifeng_ch4_01', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.charm': { add: 3 }, 'flags.palace_path_wxf': { set: true } } },
            { text: '散尽家财，赎罪修行', next: 'wangxifeng_ch4_02', conditions: { 'attributes.wisdom': { min: 7 } }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 }, 'flags.redemption_path': { set: true } } },
            { text: '弃政从商，以才能立足', next: 'wangxifeng_ch4_03', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.fortune': { add: 2 }, 'flags.business_queen': { set: true } } },
            { text: '行善济世，赎回灵魂', next: 'wangxifeng_ch4_04', conditions: { 'attributes.wisdom': { min: 6 } }, effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 5 }, 'flags.philanthropist': { set: true } } }
        ]
    },
    wangxifeng_end_01: { id: 'wangxifeng_end_01', chapter: 5, title: '机关算尽·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾府抄家之日，凤姐的一切算计都化为泡影。\n\n"机关算尽太聪明，反误了卿卿性命。生前心已碎，死后性空灵。"\n\n她苦笑道："机关算尽太聪明，反误了卿卿性命……这话竟应在我身上了。"她终于明白，有些东西，不是靠算计就能得到的。那个曾经叱咤风云的凤辣子，最终也不过是一个被命运捉弄的可怜人。', isEnding: true, poem: "机关算尽太聪明，反误了卿卿性命。生前心已碎，死后性空灵。", choices: [] },
    wangxifeng_end_02: { id: 'wangxifeng_end_02', chapter: 5, title: '浪子回头·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐选择了放下。她将私藏的钱财拿出来补贴家用，向受过她害的人忏悔。\n\n"一场欢喜忽悲辛，叹人世，终难定。"\n\n她变得温和了许多，开始真心关心身边的人。"若有来生，我宁愿做个笨人。"她终于明白，聪明反被聪明误，做人还是厚道些好。那个曾经杀伐决断的凤辣子，在生命的最后关头，终于找到了内心的平静。', isEnding: true, poem: "一场欢喜忽悲辛，叹人世，终难定。", choices: [] },

    liwan_ch1_01: { id: 'liwan_ch1_01', chapter: 1, title: '稻香清居', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨在稻香村中教贾兰读书。茅屋数楹，青篱土井，虽处富贵之地，却守清贫之风。她听着儿子朗朗的读书声，心中既欣慰又心酸。', textVariations: [{ conditions: { 'attributes.emotion': { min: 8 } }, text: '李纨在稻香村中教贾兰读书。听着儿子的读书声，她的眼眶忽然红了——她想起了死去的丈夫贾珠。若他还活着，该有多好？可转念一想，她又觉得庆幸：至少她还有兰儿。这个念头让她既欣慰又心酸。' }], choices: [{ text: '继续教子', next: 'liwan_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '去诗社', next: 'liwan_ch2_01', effects: { 'attributes.talent': { add: 1 } } }] },
    liwan_ch2_01: { id: 'liwan_ch2_01', chapter: 2, title: '诗社社长', scene: 'qiushuang_zhai', speaker: '旁白', text: '李纨在诗社中担任社长，品评诗作公正有据。在诗社中，她暂时忘却了寡居的寂寞，重新找到了生活的色彩。她看着这些年轻的姐妹们笑闹，心中涌起一股暖意——原来生活还可以这样过。', choices: [{ text: '继续守节教子', next: 'liwan_ch2_02', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '在诗社中寻找快乐', next: 'liwan_ch2_02', effects: { 'attributes.emotion': { add: 2 }, 'attributes.talent': { add: 1 } } } ] },
    liwan_ch2_02: { id: 'liwan_ch2_02', chapter: 2, title: '贾兰苦读', scene: 'daoxiang_cun', speaker: '旁白', text: '贾兰日日用功苦读，他虽年幼，却深知母亲的期望。那夜，他写完一篇策论，递给李纨道："母亲，您看这篇文章如何？"李纨读罢，泪如雨下——这孩子的才华，比他父亲当年有过之而无不及。她暗暗发誓，一定要让贾兰出人头地。', choices: [{ text: '严格要求贾兰', next: 'liwan_ch3_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '温柔鼓励', next: 'liwan_ch3_01', effects: { 'attributes.emotion': { add: 2 } } } ] },
    liwan_ch3_01: { id: 'liwan_ch3_01', chapter: 3, title: '命运抉择', scene: 'daoxiang_cun', speaker: '旁白', text: '贾府日渐衰败，李纨面临着人生的重要抉择。她可以继续守在稻香村中等待贾兰功成名就，也可以走出这方寸之地，为自己活一次。稻香村中的青篱土井依旧清贫，但她的心已经不再平静。', choices: [ { text: '继续守节教子', next: 'liwan_end_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '为自己活一次', next: 'liwan_end_02', effects: { 'attributes.emotion': { add: 3 } } }, { text: '走出稻香村，拥抱新生活', next: 'liwan_end_03', conditions: { 'flags.evt_socialize': true }, effects: { 'attributes.emotion': { add: 4 }, 'attributes.charm': { add: 2 }, 'flags.social_butterfly': { set: true } } }, { text: '以贾兰功名为跳板，重新掌权', next: 'liwan_end_04', conditions: { 'flags.evt_jialan_success': true }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.matriarch': { set: true } } },
            { text: '著书立说，以文字立身', next: 'liwan_ch3_02', effects: { 'attributes.talent': { add: 3 }, 'attributes.wisdom': { add: 2 }, 'flags.writer_liwan': { set: true } } },
            { text: '创办义学，教育济世', next: 'liwan_ch3_03', conditions: { 'attributes.wisdom': { min: 6 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.emotion': { add: 2 }, 'flags.charity_school': { set: true } } }
        ] },
    liwan_end_01: { id: 'liwan_end_01', chapter: 5, title: '晚韶华·终章', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨守节教子，终于等到了贾兰金榜题名。\n\n"镜里恩情，更那堪梦里功名！那美韶华去之何迅！再休提绣帐鸳鸯。"\n\n"晚韶华"三个字，道尽了她一生的悲喜——虽然最终功成名就，但那青春年华，终究是一去不返了。她站在稻香村门口，看着贾兰远去的背影，既欣慰又心酸。这一生，她没有为自己活过一天。', isEnding: true, poem: "镜里恩情，更那堪梦里功名！那美韶华去之何迅！再休提绣帐鸳鸯。", choices: [] },
    liwan_end_02: { id: 'liwan_end_02', chapter: 5, title: '枯木逢春·终章', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨不再将自己封闭在稻香村中，开始参与诗社活动，与姐妹们交往。\n\n"竹篱茅舍自甘心，何求粉白与黛绿。"\n\n她对贾兰道："母亲也要为自己活一回。"她在晚年终于找到了属于自己的快乐，也成为了大观园中姐妹们最信赖的知心人。稻香村中的青篱土井，依旧清贫，却多了几分温暖与生机。', isEnding: true, poem: "竹篱茅舍自甘心，何求粉白与黛绿。", choices: [] },
    liwan_end_03: { id: 'liwan_end_03', chapter: 5, title: '蝶变重生·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '李纨走出了稻香村，不再是那个槁木死灰的寡妇。她开始参与诗社、结交朋友，甚至学会了笑。\n\n"桃李春风一杯酒，江湖夜雨十年灯。"\n\n她对姐妹们说："守了这么多年节，我也要为自己活一回。"她用积蓄开了一间书坊，刊印女子诗文，成为了京城最受尊敬的女出版家之一。那个曾经如槁木死灰的李纨，终于如枯木逢春，绽放出了属于自己的光彩。', isEnding: true, poem: "桃李春风一杯酒，江湖夜雨十年灯。", choices: [] },
    liwan_end_04: { id: 'liwan_end_04', chapter: 5, title: '母凭子贵·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾兰金榜题名，李纨终于扬眉吐气。她不再是那个低眉顺眼的寡妇，而是堂堂正正的诰命夫人。\n\n"镜里恩情，更那堪梦里功名！"\n\n她以贾兰的功名为后盾，在贾府中重新获得了话语权。她暗中帮助探春推行改革，为姐妹们撑腰，成为了贾府新一代的定海神针。那个曾经默默无闻的稻香老农，终于以自己的方式，成为了贾府中最有影响力的人。', isEnding: true, poem: "镜里恩情，更那堪梦里功名！", choices: [] },

    miaoyu_ch1_01: { id: 'miaoyu_ch1_01', chapter: 1, title: '栊翠清修', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉在栊翠庵中打坐修行，木鱼声声，檀香袅袅。她虽身在空门，心却未真正清净。', textVariations: [{ conditions: { 'attributes.emotion': { min: 8 } }, text: '妙玉在栊翠庵中打坐修行，却怎么也静不下心来。"欲洁何曾洁，云空未必空"——她想起这句话，心中涌起一股难以名状的苦涩。她究竟在逃避什么？又在追求什么？她不知道答案，只知道这木鱼声越敲越响，却敲不散她心中的迷雾。' }, { conditions: { 'attributes.wisdom': { min: 8 } }, text: '妙玉在栊翠庵中打坐修行，心中却在想：佛说"色即是空"，可若真如此，为何还要修行？难道"空"不是另一种"执"？她忽然觉得好笑——世人笑她怪僻，她何尝不笑世人痴愚？' }], choices: [{ text: '继续清修', next: 'miaoyu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '去园中走走', next: 'miaoyu_ch1_02', effects: { 'attributes.emotion': { add: 2 } } }] },
    miaoyu_ch1_02: { id: 'miaoyu_ch1_02', chapter: 1, title: '月下独步', scene: 'wufeng_bridge', speaker: '旁白', text: '妙玉走出栊翠庵，月色如水。她走过沁芳桥，看见宝玉与黛玉在桥上说话。两人相视而笑的模样，让妙玉心中泛起一丝说不清的涟漪。她转身离去，低声道："色即是空，空即是色……"可她的脚步，却不由自主地慢了下来。', choices: [{ text: '回到庵中清修', next: 'miaoyu_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '在月下多待一会儿', next: 'miaoyu_ch2_01', effects: { 'attributes.emotion': { add: 2 } } }] },
    miaoyu_ch2_01: { id: 'miaoyu_ch2_01', chapter: 2, title: '品茶论道', scene: 'gufang_bridge', speaker: '旁白', text: '贾母带人来栊翠庵品茶。妙玉以梅花雪水烹茶，用古玩珍器待客。待众人散去，妙玉单独留下宝钗和黛玉品茶。妙玉道："一杯为品，二杯即是解渴的蠢物，三杯便是饮驴了。"黛玉抿嘴偷笑，宝钗含蓄点头。三人虽性格迥异，却在这一盏茶中，找到了难得的默契。', choices: [{ text: '继续清修', next: 'miaoyu_ch2_02', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '与黛玉宝钗多聊一会儿', next: 'miaoyu_ch2_02', effects: { 'relationships.ldaiyu': { add: 3 }, 'relationships.xbaochai': { add: 3 } } } ] },
    miaoyu_ch2_02: { id: 'miaoyu_ch2_02', chapter: 2, title: '槛外槛内', scene: 'gufang_bridge', speaker: '旁白', text: '夜深了，妙玉独坐庵中，翻看佛经却一个字也读不进去。她想起白日里宝玉来品茶时的笑容，想起黛玉的才情，想起宝钗的稳重——这些人都活在红尘之中，而她却被困在槛外。她忽然问自己：她选择出家，究竟是为了修行，还是为了逃避？', choices: [{ text: '继续修行', next: 'miaoyu_ch2_03', effects: { 'attributes.wisdom': { add: 3 } } }, { text: '还俗入世', next: 'miaoyu_ch2_03', effects: { 'attributes.emotion': { add: 3 } } }, { text: '寻找第三条路', next: 'miaoyu_ch2_03', effects: { 'attributes.wisdom': { add: 2 } } } ] },
    miaoyu_ch2_03: { id: 'miaoyu_ch2_03', chapter: 2, title: '梅花三弄', scene: 'gufang_bridge', speaker: '旁白', text: '冬夜大雪，妙玉在栊翠庵中抚琴。琴声清越，如冰泉流石，又似梅花落雪。忽然，庵外传来脚步声——竟是宝玉踏雪而来。他站在梅花树下，静听琴声，不敢打扰。一曲终了，妙玉道："既然来了，何不进来？"宝玉笑道："怕扰了你的清修。"妙玉淡淡道："佛门虽广，却容不下一杯茶么？"', choices: [{ text: '与宝玉品茶论禅', next: 'miaoyu_ch3_01', effects: { 'relationships.jbaoyu': { add: 5 }, 'attributes.wisdom': { add: 2 } } }, { text: '独自继续抚琴', next: 'miaoyu_ch3_01', effects: { 'attributes.talent': { add: 2 }, 'attributes.wisdom': { add: 1 } } } ] },
    miaoyu_ch3_01: { id: 'miaoyu_ch3_01', chapter: 3, title: '命运抉择', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉面临命运的抉择。贾府风雨飘摇，栊翠庵也不再是世外桃源。她必须做出选择——是继续躲在槛外，还是勇敢地面对这个世界？', choices: [ { text: '继续修行，听天由命', next: 'miaoyu_end_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '还俗入世', next: 'miaoyu_end_02', effects: { 'attributes.emotion': { add: 3 } } }, { text: '寻找第三条路', next: 'miaoyu_end_03', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '以禅定之力超脱红尘', next: 'miaoyu_end_04', conditions: { 'flags.evt_zen_mastery': true }, effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 2 }, 'flags.zen_master': { set: true } } }, { text: '推窗望月，入世修行', next: 'miaoyu_end_05', conditions: { 'flags.evt_window_open': true }, effects: { 'attributes.emotion': { add: 4 }, 'attributes.talent': { add: 2 }, 'flags.worldly_zen': { set: true } } },
            { text: '以茶道悟禅，另辟修行之路', next: 'miaoyu_ch3_02', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.talent': { add: 2 }, 'flags.tea_master': { set: true } } },
            { text: '以医术入道，慈悲济世', next: 'miaoyu_ch3_03', conditions: { 'attributes.wisdom': { min: 6 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.emotion': { add: 3 }, 'flags.healer_miaoyu': { set: true } } }
        ] },
    miaoyu_end_01: { id: 'miaoyu_end_01', chapter: 5, title: '青灯古佛·终章', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉选择了继续修行。然而"欲洁何曾洁"——贾府抄家之日，强人闯入栊翠庵，将她掳走。\n\n"欲洁何曾洁，云空未必空。可怜金玉质，终陷淖泥中。"\n\n那个高洁的槛外人，最终还是落入了最肮脏的境地。这便是命运的讽刺——越是追求洁净，越是被污浊所侵。栊翠庵中的梅花雪水，再无人来烹茶了。', isEnding: true, poem: "欲洁何曾洁，云空未必空。可怜金玉质，终陷淖泥中。", choices: [] },
    miaoyu_end_02: { id: 'miaoyu_end_02', chapter: 5, title: '还俗归真·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '妙玉脱下僧袍，走出了栊翠庵。\n\n"气质美如兰，才华阜比仙。天生成孤僻人皆罕。"\n\n她说："我不再做那槛外之人，也不做那槛内之人。我只想做一个真实的自己。"她在江南开了一间茶室，以茶会友，自在逍遥。那杯用梅花雪水烹的茶，终于不再是为了逃避，而是为了品味人生。', isEnding: true, poem: "气质美如兰，才华阜比仙。天生成孤僻人皆罕。", choices: [] },
    miaoyu_end_03: { id: 'miaoyu_end_03', chapter: 5, title: '半槛半空·终章', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉在山间建了一间小屋，种梅养鹤，以茶会友。她既不出世也不入世，而是找到了属于自己的平衡。\n\n"一杯为品，二杯即是解渴的蠢物，三杯便是饮驴了。"\n\n她常说："槛内槛外，不过一念之间。心安处，即是归处。"她终于不再被"洁"与"空"所困，而是自在地活在了天地之间。', isEnding: true, poem: "一杯为品，二杯即是解渴的蠢物，三杯便是饮驴了。", choices: [] },
    miaoyu_end_04: { id: 'miaoyu_end_04', chapter: 5, title: '禅定超脱·终章', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉以禅定之力超脱了红尘的束缚。她不再是那个欲洁何曾洁的槛外人，而是真正达到了心如止水的境界。\n\n"纵有千年铁门槛，终须一个土馒头。"\n\n她在栊翠庵中安然度过了一生，既没有被强人掳走，也没有被尘缘所困。她以茶悟道，以禅修心，最终在梅花盛开的冬夜，含笑而逝。那杯梅花雪水烹的茶，终于品出了真正的味道——不是苦，不是甜，而是淡。', isEnding: true, poem: "纵有千年铁门槛，终须一个土馒头。", choices: [] },
    miaoyu_end_05: { id: 'miaoyu_end_05', chapter: 5, title: '入世修行·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '妙玉推开了那扇窗，也推开了心中的门。她走出了栊翠庵，不再以清高自许，而是真正去体验人间的冷暖。\n\n"气质美如兰，才华阜比仙。"\n\n她在京城开设了一间茶室，以茶道闻名。她不再嫌弃刘姥姥用过的杯子，而是以平等之心对待每一位来客。那个曾经目下无人的槛外人，终于成为了一个真正慈悲的人。她说："入世方能出世，经尘方知超尘。"', isEnding: true, poem: "气质美如兰，才华阜比仙。", choices: [] },

    qingwen_ch1_01: { id: 'qingwen_ch1_01', chapter: 1, title: '怡红岁月', scene: 'yihong_yuan', speaker: '旁白', text: '晴雯在怡红院中做针线，她手艺精巧，一针一线皆见功夫。那日宝玉的雀金裘烧了一个洞，满城裁缝都补不了，独晴雯带病界线，补得天衣无缝。', textVariations: [{ conditions: { 'attributes.talent': { min: 8 } }, text: '晴雯在怡红院中做针线，她的手艺之精，连宫中的绣娘都自愧不如。那日她补完雀金裘后，宝玉捧着衣服爱不释手。晴雯笑道："二爷，这手艺可是我晴雯的看家本领——不是我夸口，这京城之中，怕是找不出第二个来。"' }, { conditions: { 'relationships.jbaoyu': { min: 50 } }, text: '晴雯在怡红院中做针线，宝玉在一旁看着她，目光温柔。晴雯被他看得脸红，嗔道："二爷老看着我做什么？"宝玉笑道："看你啊。"晴雯的心跳漏了一拍——她知道，自己对这个少年早已不是主仆之情了。' }], choices: [{ text: '继续做针线', next: 'qingwen_ch2_01', effects: { 'attributes.talent': { add: 2 } } }, { text: '与宝玉说笑', next: 'qingwen_ch2_01', effects: { 'relationships.jbaoyu': { add: 3 } } }] },
    qingwen_ch2_01: { id: 'qingwen_ch2_01', chapter: 2, title: '撕扇千金', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉因金钏之事烦闷，晴雯失手跌折了扇子，两人拌嘴。后来宝玉来赔不是，道："你爱撕就撕。"晴雯果然接过扇子嗤嗤撕了几把，宝玉在旁拍手笑道："撕得好！"那一刻，晴雯笑得像个孩子——她虽是丫鬟，却有着比主子还率真的性子。', choices: [{ text: '继续与宝玉说笑', next: 'qingwen_ch2_02', effects: { 'relationships.jbaoyu': { add: 3 }, 'attributes.emotion': { add: 1 } } }, { text: '收起笑容，心中暗忧', next: 'qingwen_ch2_02', effects: { 'attributes.wisdom': { add: 1 } } } ] },
    qingwen_ch2_02: { id: 'qingwen_ch2_02', chapter: 2, title: '病补雀金裘', scene: 'yihong_yuan', speaker: '旁白', text: '深秋，宝玉的雀金裘不慎烧了一个洞。满城裁缝都补不了，晴雯虽病中，仍咬牙拿针，用界线之法补得天衣无缝。补完后她已力竭，伏在枕上喘息不止。宝玉心疼得直掉泪，晴雯却笑道："不过是件衣裳，值得你这样？"然而她的手在发抖——她知道自己的身体已大不如前了。', choices: [{ text: '安心养病', next: 'qingwen_ch2_03', effects: { 'attributes.health': { add: 1 } } }, { text: '不顾病体，继续做针线', next: 'qingwen_ch2_03', effects: { 'attributes.talent': { add: 2 }, 'attributes.health': { add: -2 } } } ] },
    qingwen_ch2_03: { id: 'qingwen_ch2_03', chapter: 2, title: '暗潮汹涌', scene: 'yihong_yuan', speaker: '旁白', text: '王夫人开始暗中查问怡红院中的丫鬟们。袭人被叫去问话，回来后面色凝重。秋纹悄悄告诉晴雯："太太问了好些话，都是关于你的。"晴雯冷笑道："我行得正坐得端，怕她做什么？"然而她心中也隐隐不安——她知道王夫人最不喜欢"轻狂"的女子，而她在王夫人眼中，恰恰就是那个"轻狂"的人。', choices: [{ text: '收敛性情', next: 'qingwen_ch2_04', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '我行我素', next: 'qingwen_ch2_04', effects: { 'attributes.emotion': { add: 2 }, 'attributes.charm': { add: 1 } } } ] },
    qingwen_ch2_04: { id: 'qingwen_ch2_04', chapter: 2, title: '中秋之夜', scene: 'yihong_yuan', speaker: '旁白', text: '中秋夜，怡红院中众人赏月。晴雯与麝月、秋纹等人在院中猜枚行令，笑声不断。宝玉也来凑热闹，他看着晴雯在月光下的侧脸，忽然道："晴雯，你笑起来真好看。"晴雯嗔道："少来油嘴滑舌！"但她的眼中闪过一丝温柔。然而好景不长，王善保家的从院外经过，冷冷地看了晴雯一眼，便走了。晴雯的笑容瞬间凝固。', choices: [{ text: '不在意，继续说笑', next: 'qingwen_ch3_01', effects: { 'attributes.emotion': { add: 1 } } }, { text: '心中暗忧', next: 'qingwen_ch3_01', effects: { 'attributes.wisdom': { add: 1 } } } ] },
    qingwen_ch3_01: {
        id: 'qingwen_ch3_01', chapter: 3, title: '命运抉择',
        scene: 'yihong_yuan', speaker: '旁白',
        text: '王夫人以"狐狸精"之名将晴雯逐出大观园。她躺在破屋中，病入膏肓，心中满是不甘。她何曾做过什么见不得人的事？她的手艺、她的率真、她的骄傲——难道这些都是罪过吗？',
        choices: [
            { text: '含冤而终', next: 'qingwen_end_01', effects: { 'attributes.emotion': { add: 3 } } },
            { text: '为自己辩白', next: 'qingwen_end_02', effects: { 'attributes.wisdom': { add: 2 } } },
            { text: '逃离贾府，自谋生路', next: 'qingwen_end_03', effects: { 'attributes.wisdom': { add: 3 } } },
            { text: '以绣技谋生，闯出名堂', next: 'qingwen_end_04', conditions: { 'flags.evt_embroidery_job': true }, effects: { 'attributes.talent': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.embroidery_master': { set: true } } },
            { text: '求宝玉相助', next: 'qingwen_end_05', conditions: { 'flags.evt_baoyu_care': true }, effects: { 'relationships.jbaoyu': { add: 8 }, 'attributes.emotion': { add: 3 }, 'flags.baoyu_rescue': { set: true } } },
            { text: '以绣技独立谋生', next: 'qingwen_ch3_02', effects: { 'attributes.talent': { add: 3 }, 'attributes.wisdom': { add: 2 }, 'flags.master_craftswoman': { set: true } } },
            { text: '入戏班唱戏，活出真性情', next: 'qingwen_ch3_03', conditions: { 'attributes.charm': { min: 6 } }, effects: { 'attributes.talent': { add: 4 }, 'attributes.charm': { add: 3 }, 'flags.opera_star': { set: true } } }
        ]
    },
    qingwen_end_01: { id: 'qingwen_end_01', chapter: 5, title: '芙蓉花神·终章', scene: 'yihong_yuan', speaker: '旁白', text: '晴雯含冤而亡，宝玉作《芙蓉女儿诔》祭她。\n\n"其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁，其为神则星日不足喻其精，其为貌则花月不足喻其色。"\n\n字字血泪，感天动地。怡红院中的海棠花，那一年开得格外灿烂，仿佛是晴雯的魂魄化作了花神，永远守护着这个她曾经生活过的地方。', isEnding: true, poem: "其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁，其为神则星日不足喻其精，其为貌则花月不足喻其色。", choices: [] },
    qingwen_end_02: { id: 'qingwen_end_02', chapter: 5, title: '自辩清白·终章', scene: 'rongguo_hall', speaker: '旁白', text: '晴雯当着贾母和众人的面为自己辩白。\n\n"霁月难逢，彩云易散。心比天高，身为下贱。风流灵巧招人怨。"\n\n她的话掷地有声，最终贾母做主，还了晴雯清白。她回到怡红院，虽仍是丫鬟身份，却再无人敢轻视她。她用行动证明：清白之人，终有昭雪之日。那个心比天高的女孩，终于得到了她应得的尊重。', isEnding: true, poem: "霁月难逢，彩云易散。心比天高，身为下贱。风流灵巧招人怨。", choices: [] },
    qingwen_end_03: { id: 'qingwen_end_03', chapter: 5, title: '冲出樊笼·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯以精湛的绣技谋生，她的绣品声名远扬。\n\n"寿夭多因毁谤生，多情公子空牵念。"\n\n她常说："我晴雯，不靠任何人，一样能活出个样子来！"她如一朵芙蓉花，在风雨中傲然绽放。那个曾经在怡红院中撕扇子的率真女孩，如今已成为京城最有名的绣娘。她的绣品上，总绣着一朵芙蓉花——那是她的标志，也是她的骄傲。', isEnding: true, poem: "寿夭多因毁谤生，多情公子空牵念。", choices: [] },

    xiren_ch1_01: { id: 'xiren_ch1_01', chapter: 1, title: '怡红管家', scene: 'yihong_yuan', speaker: '旁白', text: '袭人将怡红院打理得井井有条。她温柔和顺，贤良淑德，是王夫人暗中认可的宝玉准姨娘。她常以正言规劝宝玉，要他读书上进。', textVariations: [{ conditions: { 'attributes.wisdom': { min: 7 } }, text: '袭人将怡红院打理得井井有条。她心中自有盘算——她知道，要想在这贾府中立足，必须有一个靠山。王夫人是她的选择，宝玉是她的赌注。她并非不爱宝玉，只是她的爱，从来都是理智的、克制的、有计划的。' }, { conditions: { 'attributes.emotion': { min: 8 } }, text: '袭人将怡红院打理得井井有条，可每当夜深人静时，她都会想起自己的身世——她本是穷苦人家的女儿，若不是被卖入贾府，如今怕早已嫁人生子了。可每每想到这里，她又觉得庆幸：至少在这里，她还能守着宝玉。这份感情，是她在这世间唯一的寄托。' }], choices: [{ text: '继续规劝宝玉', next: 'xiren_ch2_01', effects: { 'attributes.wisdom': { add: 1 } } }, { text: '暗中观察', next: 'xiren_ch2_01', effects: { 'attributes.wisdom': { add: 2 } } }] },
    xiren_ch2_01: { id: 'xiren_ch2_01', chapter: 2, title: '暗中进言', scene: 'rongguo_hall', speaker: '旁白', text: '袭人私下向王夫人进言，说二爷和姑娘们日日在一处到底不便。王夫人大为感动，从此更加信任袭人。然而袭人心中也有一丝不安——她这样做，究竟是为了宝玉好，还是为了自己的地位？', choices: [{ text: '继续为宝玉着想', next: 'xiren_ch2_02', effects: { 'relationships.wangfuren': { add: 5 } } }, { text: '开始反思自己的动机', next: 'xiren_ch2_02', effects: { 'attributes.wisdom': { add: 2 } } }] },
    xiren_ch2_02: { id: 'xiren_ch2_02', chapter: 2, title: '怡红暗流', scene: 'yihong_yuan', speaker: '旁白', text: '袭人发现王夫人对晴雯越来越不满。她夹在中间左右为难——晴雯虽嘴上不饶人，却是个好人；可王夫人的意思她也不敢违逆。那夜，她翻来覆去睡不着，想起自己初进贾府时的模样——那时她只是个普通丫鬟，如今却已身负重任。她叹了口气，不知这条路究竟通向何方。', choices: [{ text: '暗中保护晴雯', next: 'xiren_ch2_03', effects: { 'relationships.qingwen': { add: 3 }, 'attributes.emotion': { add: 1 } } }, { text: '顺从王夫人的意思', next: 'xiren_ch2_03', effects: { 'attributes.wisdom': { add: 1 } } } ] },
    xiren_ch2_03: { id: 'xiren_ch2_03', chapter: 2, title: '温柔规劝', scene: 'yihong_yuan', speaker: '旁白', text: '袭人趁宝玉心情好时劝道："二爷，你也该收收心了。老太太和太太都盼着你好呢。"宝玉叹道："你说的我都懂，只是……"他没有说下去，但袭人知道他想说什么——他放不下大观园中的姐妹们。袭人握着他的手道："我明白你的心，可这世上的事，哪能都由着性子来？"宝玉看着她，第一次觉得这个总是规劝他的丫鬟，其实也很不容易。', choices: [{ text: '继续苦劝', next: 'xiren_ch3_01', effects: { 'relationships.jbaoyu': { add: -2 }, 'attributes.wisdom': { add: 2 } } }, { text: '温柔以对，不强求', next: 'xiren_ch3_01', effects: { 'relationships.jbaoyu': { add: 3 }, 'attributes.emotion': { add: 1 } } } ] },
    xiren_ch3_01: { id: 'xiren_ch3_01', chapter: 3, title: '命运抉择', scene: 'yihong_yuan', speaker: '旁白', text: '贾府衰败之日，宝玉出家，袭人失去了依靠。她面临抉择：守在贾府等待，还是开始新的生活？她一生都在为别人而活，如今，她终于可以为自己做一次选择了。', choices: [{ text: '守在贾府', next: 'xiren_end_01', effects: { 'attributes.emotion': { add: 2 } } }, { text: '嫁给蒋玉菡', next: 'xiren_end_02', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '独自闯荡', next: 'xiren_end_03', effects: { 'attributes.wisdom': { add: 3 } } }, { text: '跟随蒋玉菡学艺', next: 'xiren_end_04', conditions: { 'flags.evt_jiang_yuhan_meet': true }, effects: { 'attributes.talent': { add: 3 }, 'attributes.charm': { add: 2 }, 'flags.artiste_path': { set: true } } }, { text: '以温柔之力守护怡红院', next: 'xiren_end_05', conditions: { 'flags.evt_gentle_approach': true }, effects: { 'attributes.emotion': { add: 5 }, 'attributes.wisdom': { add: 2 }, 'flags.gentle_guardian': { set: true } } },
            { text: '助夫经商，以才能立足', next: 'xiren_ch3_02', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.fortune': { add: 2 }, 'flags.business_wife': { set: true } } },
            { text: '创办女工坊，帮助更多女子', next: 'xiren_ch3_03', conditions: { 'attributes.wisdom': { min: 6 } }, effects: { 'attributes.wisdom': { add: 4 }, 'attributes.emotion': { add: 3 }, 'flags.workshop_founder': { set: true } } }
        ] },
    xiren_end_01: { id: 'xiren_end_01', chapter: 5, title: '守候·终章', scene: 'yihong_yuan', speaker: '旁白', text: '袭人守在怡红院中，日复一日地等待宝玉归来。然而宝玉终究没有回来。\n\n"枉自温柔和顺，空云似桂如兰。堪羡优伶有福，谁知公子无缘。"\n\n她的一生都在为别人而活，到头来，连自己为谁而等都不知道了。怡红院中的海棠花年年开落，她的等待，也如那花一般，终是无果。', isEnding: true, poem: "枉自温柔和顺，空云似桂如兰。堪羡优伶有福，谁知公子无缘。", choices: [] },
    xiren_end_02: { id: 'xiren_end_02', chapter: 5, title: '花落谁家·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人嫁给了蒋玉菡。蒋玉菡温柔体贴，对她极好。\n\n"花气袭人知骤暖，鹊声穿树喜新晴。"\n\n然而每当桃花盛开的季节，她仍会想起那个"花气袭人知骤暖"的午后——那时她还叫花珍珠，怡红院中的日子，是她一生中最温暖的记忆。她终于有了自己的家，却再也找不回那种被人需要的感觉了。', isEnding: true, poem: "花气袭人知骤暖，鹊声穿树喜新晴。", choices: [] },
    xiren_end_03: { id: 'xiren_end_03', chapter: 5, title: '自立门户·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人做出了一个出人意料的决定——她离开贾府，用积蓄开了一间小铺子，自食其力。\n\n"桃红又是一年春，花气袭人知骤暖。"\n\n她终于不再依附于任何人，活出了自己的样子。她常说："做丫鬟时，我替别人活；如今，我替自己活。"那个温柔和顺的袭人，终于也有了自己的骨气。', isEnding: true, poem: "桃红又是一年春，花气袭人知骤暖。", choices: [] },
    xiren_end_04: { id: 'xiren_end_04', chapter: 5, title: '梨园新声·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人跟随蒋玉菡学艺，从丫鬟变成了梨园中人。她虽不是名角，却以温柔体贴赢得了所有人的喜爱。\n\n"枉自温柔和顺，空云似桂如兰。"\n\n她与蒋玉菡搭档，一个唱生，一个唱旦，配合默契。她终于找到了自己的舞台——不是怡红院，不是荣国府，而是那方寸之间的戏台。她常说："做丫鬟时演的是贤良淑德，如今唱的才是真性情。"', isEnding: true, poem: "枉自温柔和顺，空云似桂如兰。", choices: [] },
    xiren_end_05: { id: 'xiren_end_05', chapter: 5, title: '温柔守护·终章', scene: 'yihong_yuan', speaker: '旁白', text: '袭人以温柔之力守护着怡红院中的一切。宝玉虽已远去，但她将这里打理得一如往昔，等着那些离散的姐妹们回来。\n\n"花气袭人知骤暖，鹊声穿树喜新晴。"\n\n她不再是任何人的丫鬟，而是怡红院的主人。她收留了无家可归的丫鬟们，教她们读书识字、做针线活。那个曾经只会为别人而活的袭人，终于学会了为自己做主——她的温柔，不再是软弱的代名词，而是最坚韧的力量。', isEnding: true, poem: "花气袭人知骤暖，鹊声穿树喜新晴。", choices: [] },

    baoyu_ch4_01d: { id: 'baoyu_ch4_01d', chapter: 4, title: '比翼双飞', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉做出了一个惊世骇俗的决定——他找到黛玉，将心中所想和盘托出。黛玉含泪点头，两人趁着夜色离开了贾府。一路南下，在江南水乡安顿下来。宝玉以书画为生，黛玉的身体在温润的南方竟渐渐好转。他们远离了那些勾心斗角，只守着彼此，过着平淡却幸福的日子。', choices: [{ text: '继续', next: 'baoyu_end_04', effects: { 'relationships.ldaiyu': { add: 5 } } }] },
    baoyu_ch4_01e: { id: 'baoyu_ch4_01e', chapter: 4, title: '悟道归真', scene: 'yihong_yuan', speaker: '旁白', text: '太虚幻境中的警幻之言如醍醐灌顶，宝玉终于看透了这红尘中的虚妄。他不再执着于功名，也不再纠结于情爱，而是以一种超然的态度面对一切。他帮助探春推行改革，安慰病中的黛玉，与姐妹们吟诗作对——但心中始终保持着一份清明。', choices: [{ text: '继续', next: 'baoyu_end_05', effects: { 'attributes.wisdom': { add: 3 } } }] },
    baoyu_end_05: { id: 'baoyu_end_05', chapter: 5, title: '大彻大悟·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉在经历了种种之后，终于大彻大悟。他没有出家，也没有远走，而是留在了大观园中，以一种全新的眼光看待这个世界。\n\n"因空见色，由色生情，传情入色，自色悟空。"\n\n他帮助姐妹们各自找到了出路，在贾府衰败之际，以自己的方式守护着每一个人。他终于明白，真正的超脱不是逃离红尘，而是在红尘中保持一颗清净之心。大观园中的花依旧年年开落，而宝玉已不再是那个懵懂少年——他成了一个真正懂得了"情"字的人。', isEnding: true, poem: "因空见色，由色生情，传情入色，自色悟空。", choices: [] },

    ldaiyu_end_05: { id: 'ldaiyu_end_05', chapter: 5, title: '诗才惊世·终章', scene: 'rongguo_hall', speaker: '旁白', text: '黛玉以一首惊世之作打动了贾母，老太太当众宣布："我的外孙女，谁也不许委屈了她！"金玉良缘之事就此作罢。\n\n"半卷湘帘半掩门，碾冰为土玉为盆。偷来梨蕊三分白，借得梅花一缕魂。"\n\n黛玉终于明白，她的才华才是她最大的力量。她不再以泪洗面，而是以诗才赢得了尊重与自由。她与宝玉在贾母的支持下结为连理，从此不再寄人篱下，而是以才女的身份立足于世。绛珠仙草不再以泪还恩，而是以诗还恩——这何尝不是最美的圆满？', isEnding: true, poem: "半卷湘帘半掩门，碾冰为土玉为盆。偷来梨蕊三分白，借得梅花一缕魂。", choices: [] },
    ldaiyu_end_06: { id: 'ldaiyu_end_06', chapter: 5, title: '金兰联手·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉与宝钗联手，两位才女共同向贾母表明了心意。宝钗主动退出了金玉良缘，黛玉则坦诚了对宝玉的情意。\n\n"可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。"\n\n两位女子，一个选择了成全，一个选择了勇敢。她们用智慧和真情打破了命运的枷锁，各自找到了属于自己的路。黛玉与宝玉终成眷属，宝钗则走上了自立之路——这便是最好的结局。', isEnding: true, poem: "可叹停机德，堪怜咏絮才。玉带林中挂，金簪雪里埋。", choices: [] },

    xbaochai_end_04: { id: 'xbaochai_end_04', chapter: 5, title: '金兰联手·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝钗与黛玉联手，共同对抗命运的安排。两位才女以智慧和真情打动了贾母，金玉良缘之事就此作罢。\n\n"淡极始知花更艳，愁多焉得玉无痕。"\n\n宝钗终于不再被金锁所束缚，她与黛玉成为了真正的知己。她开始经营薛家的生意，以才干证明女子同样可以撑起一片天。那枚金锁，她终于可以摘下了——不是被迫，而是自愿。', isEnding: true, poem: "淡极始知花更艳，愁多焉得玉无痕。", choices: [] },
    xbaochai_end_05: { id: 'xbaochai_end_05', chapter: 5, title: '挣脱枷锁·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗摘下了金锁，将它锁进了箱底。她终于不再被"不离不弃，芳龄永继"这八个字所束缚。\n\n"好风凭借力，送我上青云。"\n\n她离开了蘅芜苑，离开了贾府，以自己的才学在京城开设了一间书坊。她刊印女子诗文，教导年轻女子读书识字，成为了京城最受尊敬的女出版家。那枚金锁，再也不是她的枷锁——而是她挣脱命运束缚的见证。', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },

    shi_xiangyun_end_04: { id: 'shi_xiangyun_end_04', chapter: 5, title: '云中白鹤·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云不再依赖任何人。她利用在贾府学到的人脉和见识，在商界站稳了脚跟。\n\n"也宜墙角也宜盆，花因喜洁难寻偶。"\n\n她常说："我史湘云，偏不信女子不如男！"她如一只白鹤，终于冲破了樊笼，在广阔的天地间自由翱翔。那个曾经在芍药花丛中醉眠的女孩，如今已成为一个让所有人刮目相看的女子。', isEnding: true, poem: "也宜墙角也宜盆，花因喜洁难寻偶。", choices: [] },
    shi_xiangyun_end_05: { id: 'shi_xiangyun_end_05', chapter: 5, title: '诗名远扬·终章', scene: 'luxue_ting', speaker: '旁白', text: '湘云的诗才名动京城，她的柳絮词被传抄一时。\n\n"萧疏白发不盈颠，守阁清灯半壁莲。"\n\n她以诗会友，结交了天下才女，在大观园中开设了女子诗社。她虽仍寄居史家，却以才学赢得了所有人的尊重。那个咬舌将"二"说成"爱"的女孩，如今已成为京城最负盛名的女诗人。她常说："人生在世，当如柳絮——随风而起，不拘一处。"', isEnding: true, poem: "萧疏白发不盈颠，守阁清灯半壁莲。", choices: [] },

    tanchun_end_04: { id: 'tanchun_end_04', chapter: 5, title: '扭转乾坤·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春暗中筹谋，利用自己在朝中的人脉，巧妙地将和亲之事转嫁他人。她不仅保全了自己，还趁机为贾府争取到了更多的利益。\n\n"一帆风雨路三千，把骨肉家园齐来抛闪。"\n\n她用行动证明：命运并非不可改变，关键在于你是否有勇气和智慧去抗争。她留在贾府，继续推行改革，最终将贾府从衰败的边缘拉了回来。那个庶出的三小姐，终于成为了贾府真正的顶梁柱。', isEnding: true, poem: "一帆风雨路三千，把骨肉家园齐来抛闪。", choices: [] },
    tanchun_end_05: { id: 'tanchun_end_05', chapter: 5, title: '改革功臣·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春以改革功绩赢得了贾母的全力支持。贾母当众宣布："三丫头是咱们贾家的功臣，谁也不许小瞧了她！"\n\n"我但凡是个男人，可以出得去，我必早走了，立一番事业。"\n\n和亲之事因探春的功绩而被搁置，她继续在贾府推行改革，将大观园治理得井井有条。她终于证明：庶出之女，一样可以撑起半边天。那个曾经被赵姨娘所困扰的女孩，如今已成为贾府最令人敬佩的人。', isEnding: true, poem: "我但凡是个男人，可以出得去，我必早走了，立一番事业。", choices: [] },

    wangxifeng_end_03: { id: 'wangxifeng_end_03', chapter: 5, title: '将功补过·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐将功补过，她将私藏的钱财全部拿出来补贴家用，又主动向官府交代了自己的过错。\n\n"一场欢喜忽悲辛，叹人世，终难定。"\n\n她的坦诚赢得了从轻发落，贾府也因此得以保全。她变得温和了许多，开始真心关心身边的人。那个曾经杀伐决断的凤辣子，终于找到了内心的平静。她常说："聪明反被聪明误，做人还是厚道些好。"', isEnding: true, poem: "一场欢喜忽悲辛，叹人世，终难定。", choices: [] },
    wangxifeng_end_04: { id: 'wangxifeng_end_04', chapter: 5, title: '从良安度·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐收手从良，不再放债取利。她将精力放在了料理家务上，虽然不如从前风光，却赢得了众人的尊重。\n\n"机关算尽太聪明，反误了卿卿性命。"\n\n她终于明白，真正的聪明不是算计别人，而是善待自己。她的身体渐渐好转，与贾琏的关系也有所改善。那个曾经叱咤风云的凤辣子，在放下执念之后，反而找到了真正的幸福。', isEnding: true, poem: "机关算尽太聪明，反误了卿卿性命。", choices: [] },

    qingwen_end_04: { id: 'qingwen_end_04', chapter: 5, title: '绣技成名·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯以精湛的绣技谋生，她的绣品声名远扬。\n\n"寿夭多因毁谤生，多情公子空牵念。"\n\n她常说："我晴雯，不靠任何人，一样能活出个样子来！"她如一朵芙蓉花，在风雨中傲然绽放。那个曾经在怡红院中撕扇子的率真女孩，如今已成为京城最有名的绣娘。她的绣品上，总绣着一朵芙蓉花——那是她的标志，也是她的骄傲。', isEnding: true, poem: "寿夭多因毁谤生，多情公子空牵念。", choices: [] },
    qingwen_end_05: { id: 'qingwen_end_05', chapter: 5, title: '宝玉相救·终章', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉得知晴雯被逐，不顾一切地去求贾母做主。贾母查明真相，还了晴雯清白，将她接回怡红院。\n\n"其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁。"\n\n晴雯回到怡红院，虽仍是丫鬟身份，却再无人敢轻视她。她与宝玉之间的情谊，比主仆更深，却清白如初。那个心比天高的女孩，终于得到了她应得的尊重和保护。', isEnding: true, poem: "其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁。", choices: [] },

    baoyu_ch4_01f: { id: 'baoyu_ch4_01f', chapter: 4, title: '悬崖撒手', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉站在大观园门口，回望那片他生活了十几年的天地。花还在开，水还在流，但他的心已经空了。他想起警幻仙子的话，想起太虚幻境中的判词——一切早已注定。他摘下通灵宝玉，放在门槛上，转身走进了茫茫雪地。身后传来黛玉的哭声，他停了一瞬，终究没有回头。', choices: [{ text: '继续前行', next: 'baoyu_end_06', effects: { 'attributes.wisdom': { add: 3 } } }, { text: '回头望最后一眼', next: 'baoyu_end_07', effects: { 'attributes.emotion': { add: 5 } } }] },
    baoyu_ch4_01g: { id: 'baoyu_ch4_01g', chapter: 4, title: '弃文从商', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉做出了一个所有人都意想不到的决定——他要经商。贾政大怒："我贾家世代簪缨，岂能出商贾之流！"宝玉平静道："父亲，读书救不了贾家，但银子可以。"他带着薛蟠的引荐信，南下苏州，开始了他的商旅生涯。', choices: [{ text: '从丝绸生意做起', next: 'baoyu_ch4_02g', effects: { 'attributes.fortune': { add: 3 }, 'attributes.wisdom': { add: 2 } } }, { text: '从茶叶贸易入手', next: 'baoyu_ch4_02g', effects: { 'attributes.fortune': { add: 2 }, 'relationships.xbaochai': { add: 3 } } }] },
    baoyu_ch4_02g: { id: 'baoyu_ch4_02g', chapter: 4, title: '商海沉浮', scene: 'daguan_yuan_gate', speaker: '旁白', text: '三年后，宝玉已非昔日那个只知吟风弄月的公子哥。他走遍江南，学会了看账本、谈生意、识人心。他的丝绸行"绛珠阁"在苏州小有名气，连宫中的采办都慕名而来。然而他心中始终记挂着大观园中的姐妹们——他赚的每一两银子，都是为了在贾府倾覆之时，能有一个退路。', choices: [{ text: '回贾府以商救家', next: 'baoyu_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 5 } } }, { text: '继续经商，不问贾府', next: 'baoyu_end_09', effects: { 'attributes.fortune': { add: 8 }, 'attributes.emotion': { add: -3 } } }] },
    baoyu_end_06: { id: 'baoyu_end_06', chapter: 5, title: '出家为僧·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉在灵隐寺出家为僧，法号"悟空"。他每日诵经打坐，青灯古佛，不问世事。然而每到深夜，他总会想起大观园中的往事——黛玉的泪、宝钗的笑、湘云的豪爽、晴雯的率真……\n\n"我所居兮，青埂之峰。我所游兮，鸿蒙太空。"\n\n他终于明白了：出家不是逃避，而是另一种面对。他用自己的方式，为那些逝去的美好，念了一生的经。', isEnding: true, poem: "我所居兮，青埂之峰。我所游兮，鸿蒙太空。", choices: [] },
    baoyu_end_07: { id: 'baoyu_end_07', chapter: 5, title: '回首红尘·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉回头望了一眼——黛玉站在潇湘馆的窗前，泪痕未干。他心中一软，终究迈不出那最后一步。他回到园中，对黛玉道："我走不了。没有你们，这佛也念不下去。"\n\n"满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？"\n\n他没有出家，也没有远走，而是留在了大观园中，以自己的方式守护着每一个人。他不再是那个懵懂少年，而是一个真正懂得了"情"字的人——情到深处，便是最好的修行。', isEnding: true, poem: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", choices: [] },
    baoyu_end_08: { id: 'baoyu_end_08', chapter: 5, title: '商道济家·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾府抄家之日，宝玉带着银票赶回。他以商人的精明与贾府的人脉，将家族从悬崖边拉了回来。他不再是从前那个只知道在脂粉堆里厮混的公子哥，而是一个能撑起家族的顶梁柱。\n\n"世事洞明皆学问，人情练达即文章。"\n\n他用银子赎回了被卖的下人，用关系保住了贾府的根基。黛玉看着他，第一次觉得这个男人值得依靠。宝玉笑道："我虽不通八股，却通世故——这何尝不是一种学问？"', isEnding: true, poem: "世事洞明皆学问，人情练达即文章。", choices: [] },
    baoyu_end_09: { id: 'baoyu_end_09', chapter: 5, title: '富甲一方·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉成了江南首富，他的"绛珠阁"遍布天下。然而他心中始终有一处空缺——那是大观园的位置。每年清明，他都会回到京城，在废墟前放一束花。\n\n"好一似食尽鸟投林，落了片白茫茫大地真干净。"\n\n他虽富甲一方，却再找不回那些年的欢声笑语。他常说："我赚了天下，却输了那一园子的人。"晚年他将家产散尽，建了一座书院，取名"大观书院"，专门收留女子读书——这是他最后的赎罪。', isEnding: true, poem: "好一似食尽鸟投林，落了片白茫茫大地真干净。", choices: [] },

    ldaiyu_ch4_01: { id: 'ldaiyu_ch4_01', chapter: 4, title: '悬壶济世', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉自幼体弱，久病成医。她翻遍医书，竟对药理颇有心得。那日，紫鹃高烧不退，黛玉亲自开方抓药，竟药到病除。消息传开，园中的丫鬟们纷纷来求她看病。黛玉苦笑道："我自己的病都治不好，倒给别人看起病来了。"', choices: [{ text: '继续钻研医术', next: 'ldaiyu_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 } } }, { text: '只帮亲近之人，不外传', next: 'ldaiyu_end_08', effects: { 'attributes.emotion': { add: 3 }, 'attributes.wisdom': { add: 2 } } }] },
    ldaiyu_ch4_02: { id: 'ldaiyu_ch4_02', chapter: 4, title: '诗馆开坛', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉的诗才早已名动贾府。那日，贾母道："黛玉这孩子，才学不输男儿。"黛玉灵光一闪——她要开馆教书，以诗传世！她在潇湘馆中开设诗社，不仅教贾府的姐妹们，还收了外面官宦家的女儿为徒。', choices: [{ text: '以诗才名动天下', next: 'ldaiyu_end_09', effects: { 'attributes.talent': { add: 8 }, 'attributes.charm': { add: 3 } } }, { text: '只教有缘之人', next: 'ldaiyu_end_10', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 2 } } }] },
    ldaiyu_end_07: { id: 'ldaiyu_end_07', chapter: 5, title: '杏林仙子·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉钻研医术，竟成了一代名医。她在京城开设医馆"潇湘堂"，专治妇科疑难杂症。多少达官贵人的夫人都受过她的恩惠。\n\n"满自荒唐言，一把辛酸泪。"\n\n她虽未能治好自己的病，却治好了无数人的病。她常说："我这一生，以泪还恩；如今以药还恩，也算圆满。"她的身体在忙碌中竟渐渐好转——也许，救人便是自救。', isEnding: true, poem: "满自荒唐言，一把辛酸泪。", choices: [] },
    ldaiyu_end_08: { id: 'ldaiyu_end_08', chapter: 5, title: '潇湘隐医·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉只在贾府中为亲近之人看病，不对外行医。她的医术成了贾府最大的秘密武器——下人们不再因病丧命，姐妹们的身体也好了许多。\n\n"质本洁来还洁去，强于污淖陷渠沟。"\n\n她虽仍是那个多愁善感的林妹妹，但她的药方却给了身边人最实在的温暖。宝玉常来求她开方，两人之间的默契，早已超越了情爱——那是一种相知相守的深情。', isEnding: true, poem: "质本洁来还洁去，强于污淖陷渠沟。", choices: [] },
    ldaiyu_end_09: { id: 'ldaiyu_end_09', chapter: 5, title: '诗仙传世·终章', scene: 'rongguo_hall', speaker: '旁白', text: '黛玉的诗名传遍天下，她被尊为"当朝第一才女"。皇帝下旨召她入宫作诗，她以一首《葬花吟》感动了龙颜，获赐"潇湘先生"之号。\n\n"尔今死去侬收葬，未卜侬身何日丧？"\n\n她开馆授徒，门下弟子遍布天下。她用诗才证明：女子不输男儿，才情便是最好的嫁妆。她终身未嫁，却活得比任何人都精彩——她嫁给了诗，嫁给了自由。', isEnding: true, poem: "尔今死去侬收葬，未卜侬身何日丧？", choices: [] },
    ldaiyu_end_10: { id: 'ldaiyu_end_10', chapter: 5, title: '诗心归隐·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉只教了几个有缘的弟子，便关了诗馆。她回到潇湘馆中，继续她的诗书生涯。她不求名动天下，只求心安理得。\n\n"寒塘渡鹤影，冷月葬花魂。"\n\n她的诗稿被弟子们偷偷抄录，流传于世。多年后，有人整理她的遗作，发现每一首诗的末尾都写着同一行小字——"致宝玉"。她用一生的诗，写了一封永远寄不出的信。', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },

    xbaochai_ch4_01: { id: 'xbaochai_ch4_01', chapter: 4, title: '著书立说', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗决定以笔为剑，将平生所学写成文字。她想起自己读过的经史子集，想起在贾府见过的世态人情，想起姐妹们的悲欢离合——这些都可以成为她笔下的素材。她对莺儿道："从今往后，我要做一件从未做过的事。"莺儿好奇道："姑娘要做什么？"宝钗微微一笑："写书。"', choices: [{ text: '撰写《女子鉴》，教导天下女子', next: 'xbaochai_end_06', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 } } }, { text: '撰写《蘅芜笔记》，记录大观园往事', next: 'xbaochai_end_07', effects: { 'attributes.emotion': { add: 3 }, 'attributes.talent': { add: 3 } } }] },
    xbaochai_ch4_02: { id: 'xbaochai_ch4_02', chapter: 4, title: '接管薛家', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗接管了薛家的生意。薛蟠不成器，母亲年迈，唯有她能撑起这个家。她以过人的才干，将薛家的生意从濒临破产做到蒸蒸日上。那些曾经看不起女商人的男人们，如今都要对她拱手作揖。', choices: [{ text: '将薛家生意做到天下', next: 'xbaochai_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 8 } } }, { text: '用财富帮助贾府姐妹', next: 'xbaochai_end_09', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 5 } } }] },
    xbaochai_end_06: { id: 'xbaochai_end_06', chapter: 5, title: '女学宗师·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗撰写了《女子鉴》一书，分修身、齐家、治学、经世四卷，教导天下女子如何自立自强。此书一出，轰动京城。\n\n"好风凭借力，送我上青云。"\n\n她以笔为剑，斩断了千百年来束缚女子的枷锁。她的书被翻印了无数次，传遍了天下。那个曾经被金锁束缚的女孩，如今已是天下女子的精神领袖。她终于明白：真正的力量，不是来自权力或财富，而是来自知识与思想。', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },
    xbaochai_end_07: { id: 'xbaochai_end_07', chapter: 5, title: '蘅芜笔记·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗撰写了《蘅芜笔记》，记录了大观园中的点点滴滴——诗社的盛况、姐妹们的才情、贾府的兴衰、每个人的悲欢。\n\n"淡极始知花更艳，愁多焉得玉无痕。"\n\n这本书后来与宝玉的《石头记》并称"红楼双璧"。读者们说：宝玉写的是情，宝钗写的是理；一个感性至极，一个理性至深。两书合读，方能读懂大观园的全部真相。她用文字为自己的人生画上了最精彩的句号。', isEnding: true, poem: "淡极始知花更艳，愁多焉得玉无痕。", choices: [] },
    xbaochai_end_08: { id: 'xbaochai_end_08', chapter: 5, title: '商界女王·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗将薛家的生意做到了天下。她的商号"蘅芜号"遍布大江南北，从丝绸到茶叶，从瓷器到药材，无所不营。\n\n"珍重芳姿昼掩门，自携手瓮灌苔盆。"\n\n她成了京城最有权势的女商人，连朝廷都要给她三分薄面。她用财富帮助了无数女子自立，开设了"蘅芜女塾"，教导女子读书算账。那个曾经被金锁束缚的女孩，如今用银子铸就了自己的王国。', isEnding: true, poem: "珍重芳姿昼掩门，自携手瓮灌苔盆。", choices: [] },
    xbaochai_end_09: { id: 'xbaochai_end_09', chapter: 5, title: '仗义疏财·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝钗用薛家的财富帮助了贾府的姐妹们。黛玉的药费、探春的嫁妆、湘云的生计——都是她一手操办。\n\n"任是无情也动人。"\n\n她没有嫁给宝玉，也没有入宫，而是选择了做所有人的后盾。她常说："我虽不能改变她们的命运，但至少能让她们的路好走一些。"那个被所有人认为"冷"的宝钗，其实是最热的那一个。', isEnding: true, poem: "任是无情也动人。", choices: [] },

    xiangyun_ch4_01: { id: 'xiangyun_ch4_01', chapter: 4, title: '仗剑江湖', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云做了一个惊世骇俗的决定——她要仗剑走江湖！她女扮男装，带着一柄祖传的宝剑，离开了贾府。她笑道："大丈夫当纵横天下，我虽是女子，又何妨？"', choices: [{ text: '行侠仗义，劫富济贫', next: 'xiangyun_end_06', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.charm': { add: 5 } } }, { text: '游历天下，以武会友', next: 'xiangyun_end_07', effects: { 'attributes.talent': { add: 3 }, 'attributes.wisdom': { add: 3 } } }] },
    xiangyun_ch4_02: { id: 'xiangyun_ch4_02', chapter: 4, title: '从军建功', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云女扮男装，化名"史云"，投入边军。她以过人的武艺和谋略，很快从一个小兵升为偏将。她在战场上屡建奇功，连主帅都对她刮目相看。', choices: [{ text: '以军功封侯', next: 'xiangyun_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 5 } } }, { text: '功成身退，归隐山林', next: 'xiangyun_end_09', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 3 } } }] },
    xiangyun_end_06: { id: 'xiangyun_end_06', chapter: 5, title: '侠女行·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云成了江湖上赫赫有名的"醉侠"。她劫富济贫，行侠仗义，所到之处，贪官恶霸闻风丧胆。\n\n"惟大英雄能本色，是真名士自风流。"\n\n她虽是女子，却比大多数男人活得都痛快。她常说："人生在世，当如烈酒——不醉不归！"她的故事被编成了话本，在茶楼酒肆中传唱不衰。那个曾经在芍药花丛中醉眠的女孩，如今已成了江湖上最传奇的侠女。', isEnding: true, poem: "惟大英雄能本色，是真名士自风流。", choices: [] },
    xiangyun_end_07: { id: 'xiangyun_end_07', chapter: 5, title: '游侠诗人·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云游历天下，以武会友，以诗传情。她每到一处，便与当地文人雅士切磋诗艺，又与江湖豪杰比武论剑。\n\n"也宜墙角也宜盆，花因喜洁难寻偶。"\n\n她将游历见闻写成了一本《云游杂记》，记录了天下风物与人情百态。这本书后来成了畅销一时的游记。她一生未嫁，却活得比任何人都自由——她是诗人，是侠客，是天地间最无拘无束的云。', isEnding: true, poem: "也宜墙角也宜盆，花因喜洁难寻偶。", choices: [] },
    xiangyun_end_08: { id: 'xiangyun_end_08', chapter: 5, title: '女将军·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云以军功被封为"镇远将军"，成为大朝第一位女将军。她的身份终于曝光，朝野震动。然而皇帝感念她的功劳，非但没有降罪，反而赐了她一块御匾——"巾帼不让须眉"。\n\n"我但凡是个男人，可以出得去，我必早走了，立一番事业。"\n\n她终于做到了——不是以男人的身份，而是以女人的身份。她用行动证明：女子一样可以保家卫国、建功立业。那个曾经咬舌将"二"说成"爱"的女孩，如今已成了万人敬仰的女将军。', isEnding: true, poem: "我但凡是个男人，可以出得去，我必早走了，立一番事业。", choices: [] },
    xiangyun_end_09: { id: 'xiangyun_end_09', chapter: 5, title: '归隐山林·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云立下赫赫战功后，选择了功成身退。她回到江南，在太湖边建了一间小屋，种梅养鹤，以诗酒自娱。\n\n"惟大英雄能本色，是真名士自风流。"\n\n她偶尔也会想起大观园中的姐妹们，想起那些诗社联句的日子。她将回忆写成了一本《大观忆旧》，在扉页上写道："人生如梦，一尊还酹江月。"那个曾经最热闹的女孩，如今选择了最安静的归宿——但她的眼中，依然有光。', isEnding: true, poem: "惟大英雄能本色，是真名士自风流。", choices: [] },

    tanchun_ch4_01: { id: 'tanchun_ch4_01', chapter: 4, title: '远航出海', scene: 'daguan_yuan_gate', speaker: '旁白', text: '探春做出了一个惊人的决定——她要出海经商。她利用和亲远嫁的机会，在海外建立了自己的商业帝国。她道："与其在贾府等死，不如到外面闯出一片天！"', choices: [{ text: '建立海外商业帝国', next: 'tanchun_end_06', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 8 } } }, { text: '以海外之力反哺贾府', next: 'tanchun_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 } } }] },
    tanchun_ch4_02: { id: 'tanchun_ch4_02', chapter: 4, title: '女官之路', scene: 'rongguo_hall', speaker: '旁白', text: '探春以庶出之身，通过科举特科入朝为官。她化名"贾春"，以男子身份参加考试，一举高中。入朝后，她推行了一系列改革，从税制到军制，条条切中要害。', choices: [{ text: '揭露女子身份，推动改革', next: 'tanchun_end_08', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.charm': { add: 5 } } }, { text: '继续隐藏身份，暗中行事', next: 'tanchun_end_09', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 } } }] },
    tanchun_end_06: { id: 'tanchun_end_06', chapter: 5, title: '海上女王·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '探春在南洋建立了自己的商业帝国。她的船队遍布东南亚，从香料到丝绸，从瓷器到茶叶，无所不营。\n\n"一帆风雨路三千，把骨肉家园齐来抛闪。"\n\n她成了南洋最有权势的女商人，当地人尊称她为"海上女王"。她用财富帮助了无数海外华人，建了学校、医院和寺庙。那个曾经被庶出身份所困的女孩，如今在海外开创了属于自己的天地。', isEnding: true, poem: "一帆风雨路三千，把骨肉家园齐来抛闪。", choices: [] },
    tanchun_end_07: { id: 'tanchun_end_07', chapter: 5, title: '反哺归家·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春在海外赚了大量的财富后，选择回到贾府。她用海外的银子还清了贾府的债务，又用海外的关系为贾府找到了新的出路。\n\n"千里东风一梦遥。"\n\n贾母老泪纵横："三丫头，你受苦了。"探春跪在贾母面前道："孙女不苦。能回来守护这个家，便是最大的幸福。"她用行动证明：远嫁不是终点，而是新起点。那个曾经被命运摆布的女孩，如今已成了命运的主人。', isEnding: true, poem: "千里东风一梦遥。", choices: [] },
    tanchun_end_08: { id: 'tanchun_end_08', chapter: 5, title: '巾帼宰相·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春在朝堂上揭露了自己的女子身份，举朝震动。然而她的改革功绩有目共睹，皇帝非但没有降罪，反而破例封她为"文渊阁大学士"——大朝第一位女宰相。\n\n"才自精明志自高，生于末世运偏消。"\n\n她推动了一系列惠及女子的改革：允许女子参加科举、允许女子继承家产、允许女子开设商铺。她用权力改变了千千万万女子的命运。那个曾经被庶出身份所困的女孩，如今已成了天下女子的希望。', isEnding: true, poem: "才自精明志自高，生于末世运偏消。", choices: [] },
    tanchun_end_09: { id: 'tanchun_end_09', chapter: 5, title: '暗夜明灯·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春继续隐藏身份，以男子的面目在朝中推行改革。她知道，一旦身份暴露，一切都将化为泡影。\n\n"清明涕送江边望，千里东风一梦遥。"\n\n她在暗中帮助了无数女子，为她们争取了读书和自立的机会。她从未被人知晓真实身份，但她的改革惠及了千家万户。多年后，有人在她的遗物中发现了一封未寄出的信，信上写着："我以男子之身行女子之志，此生无憾。"', isEnding: true, poem: "清明涕送江边望，千里东风一梦遥。", choices: [] },

    wangxifeng_ch4_01: { id: 'wangxifeng_ch4_01', chapter: 4, title: '王家靠山', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐借助王夫人的娘家关系，谋得了一个朝廷采办的差事。她以过人的管理才能，将采办之事打理得井井有条，连内务府的大人们都对她刮目相看。平儿道："奶奶这本事，在贾府管家用武之地太小了。"凤姐冷笑道："我王熙凤的本事，哪里都用得上。"', choices: [{ text: '步步高升，权势滔天', next: 'wangxifeng_end_05', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 } } }, { text: '利用权力暗中行善', next: 'wangxifeng_end_06', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 5 } } }] },
    wangxifeng_ch4_02: { id: 'wangxifeng_ch4_02', chapter: 4, title: '散财赎罪', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐将多年积攒的私房钱全部散出，用来接济那些被她伤害过的人。她亲自去尤二姐的坟前上香，跪在坟前痛哭失声。平儿看着她的背影，第一次觉得这个女人真的变了。', choices: [{ text: '余生行善，弥补过错', next: 'wangxifeng_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 5 } } }, { text: '出家修行，了此残生', next: 'wangxifeng_end_08', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 3 } } }] },
    wangxifeng_end_05: { id: 'wangxifeng_end_05', chapter: 5, title: '权倾朝野·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐以过人的手腕，成了朝中最有权势的女采办。她掌控着内廷的采购大权，连六部官员都要给她三分薄面。\n\n"机关算尽太聪明，反误了卿卿性命。"\n\n然而这一次，她没有重蹈覆辙。她用权力帮助了无数人——为贫寒书生争取了科举的机会，为受冤屈的百姓伸张了正义。那个曾经杀伐决断的凤辣子，终于学会了用权力行善。', isEnding: true, poem: "机关算尽太聪明，反误了卿卿性命。", choices: [] },
    wangxifeng_end_06: { id: 'wangxifeng_end_06', chapter: 5, title: '暗度陈仓·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐在朝廷差事的掩护下，暗中帮助了无数人。她用采办的便利为穷苦百姓送去物资，为受冤的女子洗清了罪名。\n\n"一场欢喜忽悲辛，叹人世，终难定。"\n\n没有人知道这些善事是她做的——她依然是那个"凤辣子"，依然嘴上不饶人。但她的心中，已经多了一份慈悲。临终前她对巧姐道："娘这一生，前半生做错了许多事。后半生能弥补一些，便也心安了。"', isEnding: true, poem: "一场欢喜忽悲辛，叹人世，终难定。", choices: [] },
    wangxifeng_end_07: { id: 'wangxifeng_end_07', chapter: 5, title: '善终有报·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐散尽家财，余生都在行善。她建了一座义庄，收留无家可归的女子；她设了一间药局，免费为穷人看病。\n\n"势败休云贵，家亡莫论亲。"\n\n她的身体在忙碌中竟渐渐好转。平儿道："奶奶这是善有善报。"凤姐笑道："什么善报？不过是闲不住罢了。"然而她的眼中，有了从前从未有过的平和。那个曾经算尽天下的凤辣子，终于算明白了一件事——人生最大的聪明，是善良。', isEnding: true, poem: "势败休云贵，家亡莫论亲。", choices: [] },
    wangxifeng_end_08: { id: 'wangxifeng_end_08', chapter: 5, title: '青灯古佛·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐在尼姑庵中出家，法号"悟真"。她每日诵经打坐，为那些被她伤害过的人祈福。\n\n"一从二令三人木，哭向金陵事更哀。"\n\n她不再是那个叱咤风云的凤辣子，而是一个安静的老尼姑。她常说："我这一生，前半生算计别人，后半生算计自己。如今算明白了——人活着，不是为了算计。"那个曾经最精明的女人，在佛前找到了最后的安宁。', isEnding: true, poem: "一从二令三人木，哭向金陵事更哀。", choices: [] },

    baoyu_ch4_01h: { id: 'baoyu_ch4_01h', chapter: 4, title: '著书立说', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉做了一个出人意料的决定——他要将贾府的故事写下来。他想起太虚幻境中的判词，想起那些已经消逝的美好，心中涌起一股强烈的使命感。他对袭人道："这满园的悲欢离合，若无人记录，岂非如落花入水，了无痕迹？"他铺纸研墨，提笔写下第一行字——"满纸荒唐言，一把辛酸泪。"', choices: [{ text: '以小说体裁记录贾府兴衰', next: 'baoyu_ch4_03h', effects: { 'attributes.talent': { add: 5 }, 'attributes.wisdom': { add: 3 }, 'flags.writer_path': { set: true } } }, { text: '以史书体裁记录家族往事', next: 'baoyu_ch4_03h', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 2 }, 'flags.historian_path': { set: true } } }] },
    baoyu_ch4_03h: { id: 'baoyu_ch4_03h', chapter: 4, title: '笔耕不辍', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉日夜伏案写作，将大观园中的点点滴滴化为文字。他写黛玉葬花时的悲吟，写宝钗扑蝶时的天真，写湘云醉眠芍药时的洒脱，写晴雯撕扇时的率真……每一个字都是他的心血，每一段都是他的回忆。黛玉悄悄来看他，见案上稿纸堆积如山，轻声道："你这是在为谁而写？"宝玉抬头，目光灼灼："为所有被遗忘的人。"', choices: [{ text: '继续写作，将书完成', next: 'baoyu_end_10', effects: { 'attributes.talent': { add: 5 }, 'attributes.wisdom': { add: 3 } } }, { text: '在写作中悟道，超脱红尘', next: 'baoyu_end_11', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.emotion': { add: 3 } } }] },
    baoyu_end_10: { id: 'baoyu_end_10', chapter: 5, title: '千古文章·终章', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉用了十年时间，终于写完了那部书。他将书稿交给黛玉审阅，黛玉读罢泪如雨下，道："你写的不是故事，是我们的命。"宝玉将书命名为《石头记》。\n\n"满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？"\n\n此书流传于世，后人读之，无不掩卷叹息。有人说这是才子佳人的故事，有人说这是家族兴衰的记录，只有宝玉自己知道——他写的，是一封写给所有逝去之人的情书。他终于找到了自己的使命：不是做官，不是出家，而是用笔为那些沉默的灵魂发声。', isEnding: true, poem: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", choices: [] },
    baoyu_end_11: { id: 'baoyu_end_11', chapter: 5, title: '笔端悟道·终章', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉在写作的过程中，渐渐悟透了人生的真谛。他发现，当他将每一个人的故事写下来时，他对他们的执念也在一点点消散。\n\n"因空见色，由色生情，传情入色，自色悟空。"\n\n他终于明白：写作本身就是一种修行——通过记录他人的命运，他看清了自己的命运；通过书写他人的悲欢，他放下了自己的执念。他没有出家，也没有远走，而是留在了大观园中，继续他的写作。他的书永远没有写完——因为人生本就没有结局。', isEnding: true, poem: "因空见色，由色生情，传情入色，自色悟空。", choices: [] },

    baoyu_ch4_01i: { id: 'baoyu_ch4_01i', chapter: 4, title: '归隐田园', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉站在大观园门口，望着那片他生活了十几年的天地，忽然觉得一切繁华不过如过眼云烟。他想起陶渊明的诗句："采菊东篱下，悠然见南山。"他做了一个决定——他要归隐田园，远离这红尘俗世。他对袭人道："我不要这荣华富贵了，我要去过真正属于自己的日子。"', choices: [{ text: '独自归隐山林', next: 'baoyu_end_12', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: -2 } } }, { text: '邀请黛玉同去', next: 'baoyu_end_13', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 5 } } }] },
    baoyu_end_12: { id: 'baoyu_end_12', chapter: 5, title: '山野隐士·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉独自归隐山林，在一处山清水秀之地建了几间茅屋。他种菜养花，读书写字，过起了与世无争的日子。\n\n"世人都晓神仙好，惟有功名忘不了！"\n\n他偶尔也会想起大观园中的姐妹们，但那些记忆已不再让他痛苦——他学会了与回忆和平共处。他常在月下独酌，对着山间的清风吟诗。有人问他是否寂寞，他笑道："山间明月，江上清风，何来寂寞？"那个曾经最怕孤独的少年，终于学会了与自己相处。', isEnding: true, poem: "世人都晓神仙好，惟有功名忘不了！", choices: [] },
    baoyu_end_13: { id: 'baoyu_end_13', chapter: 5, title: '田园双隐·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉与黛玉一同归隐田园。他们在山间建了几间茅屋，种菜养花，读书写字。黛玉的身体在山间清新空气中竟渐渐好转，她的诗也越写越好。\n\n"采菊东篱下，悠然见南山。"\n\n他们虽失去了荣华富贵，却得到了最珍贵的东西——自由与安宁。宝玉常在田间劳作时哼着小曲，黛玉在窗前写诗时嘴角含笑。他们用最朴素的方式，活出了最真实的自己。那个曾经最怕失去的少年，终于明白：真正的拥有，不是抓住一切，而是放下一切。', isEnding: true, poem: "采菊东篱下，悠然见南山。", choices: [] },

    baoyu_ch4_01j: { id: 'baoyu_ch4_01j', chapter: 4, title: '入朝革新', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉做了一个令所有人震惊的决定——他要入朝为官。不是为了功名，而是为了改变。他看到贾府的衰败，看到天下女子的困境，看到这世道的不公。他对贾政道："父亲，我不想做一个只会吟诗作对的废物。我要用我的方式，让这个世界变得好一些。"贾政愣住了，他第一次在宝玉眼中看到了从未有过的坚定。', choices: [{ text: '以改革者的姿态入朝', next: 'baoyu_ch4_04j', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 }, 'flags.reformer_path': { set: true } } }, { text: '暗中结交志同道合之人', next: 'baoyu_ch4_04j', effects: { 'attributes.wisdom': { add: 4 }, 'attributes.fortune': { add: 2 }, 'flags.conspirator_path': { set: true } } }] },
    baoyu_ch4_04j: { id: 'baoyu_ch4_04j', chapter: 4, title: '朝堂风云', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉入朝后，发现朝堂之上比贾府更加险恶。但他凭借过人的才学和独特的视角，渐渐在朝中站稳了脚跟。他提出了一系列改革方案：减轻赋税、兴办女学、改革科举……每一条都触动了权贵的利益。然而他毫不退缩——他想起大观园中那些被命运摆布的姐妹们，她们的眼泪就是他最大的动力。', choices: [{ text: '坚持改革，不惧权贵', next: 'baoyu_end_14', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 } } }, { text: '以退为进，等待时机', next: 'baoyu_end_15', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.fortune': { add: 3 } } }] },
    baoyu_end_14: { id: 'baoyu_end_14', chapter: 5, title: '改革先锋·终章', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉以一己之力推动了多项改革，虽屡遭权贵打压，却始终不退缩。他常在朝堂上说："我见过最美好的女子被命运摧毁，我不能再袖手旁观。"\n\n"世事洞明皆学问，人情练达即文章。"\n\n他的改革虽未能完全成功，却为后人铺平了道路。他推动的女学改革，让无数女子有了读书的机会；他倡导的科举改革，让寒门子弟看到了希望。那个曾经只知道在脂粉堆里厮混的公子哥，如今已成了朝堂上最坚定的改革者。他用行动证明：真正的情，不是独善其身，而是兼济天下。', isEnding: true, poem: "世事洞明皆学问，人情练达即文章。", choices: [] },
    baoyu_end_15: { id: 'baoyu_end_15', chapter: 5, title: '隐忍图变·终章', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉选择了以退为进。他在朝中隐忍多年，暗中积蓄力量，结交志同道合之人。终于在一个合适的时机，他一举推动了多项改革。\n\n"好风凭借力，送我上青云。"\n\n他虽未能亲眼看到改革完成的那一天，但他的努力为后人铺平了道路。他临终前对黛玉道："我这一生，虽未能改变天下，但至少改变了身边几个人的命运。这便够了。"黛玉含泪点头，她知道，这个男人用他自己的方式，活出了最有意义的一生。', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },

    baoyu_ch4_01k: { id: 'baoyu_ch4_01k', chapter: 4, title: '游历天下', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉背上行囊，走出了贾府大门。他要去看看这个世界——不是从书本上看，而是用自己的眼睛去看。他对黛玉道："等我回来，我会告诉你这天下有多大。"黛玉含泪点头，将一块丝帕塞进他的行囊。宝玉转身，踏上了旅途。他走过繁华的市集，走过荒凉的边塞，走过烟雨的江南，走过苍茫的大漠……', choices: [{ text: '以游历见闻著书', next: 'baoyu_end_16', effects: { 'attributes.talent': { add: 5 }, 'attributes.wisdom': { add: 5 } } }, { text: '在旅途中找到归宿', next: 'baoyu_end_17', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 } } }] },
    baoyu_end_16: { id: 'baoyu_end_16', chapter: 5, title: '行万里路·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉游历天下十年，将所见所闻写成了一部《大观游记》。书中记录了天下风物、人情百态，更有他对世道的思考与批判。\n\n"读万卷书，行万里路。"\n\n他终于回到了大观园——然而园中已物是人非。黛玉已逝，宝钗远嫁，湘云不知所踪。他站在潇湘馆前，将那块丝帕放在窗台上，低声道："林妹妹，我回来了。这天下很大，可我走遍天下，也走不出你的影子。"他将余生都用来写作，用文字为那些逝去的美好立碑。', isEnding: true, poem: "读万卷书，行万里路。", choices: [] },
    baoyu_end_17: { id: 'baoyu_end_17', chapter: 5, title: '天涯归客·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉在旅途中遇到了一个渔家女，她虽不通诗文，却有着最纯真的笑容。她不认识什么宝二爷，只知道他叫"宝玉"——一个会帮她补渔网、会给她讲故事的普通男人。\n\n"弱水三千，只取一瓢饮。"\n\n他在海边安了家，日出而作，日落而息。他偶尔也会想起大观园中的日子，但那些记忆已如远方的云，淡淡地挂在天边。他终于明白：幸福不在远方，而在身边。那个曾经拥有一切的公子哥，如今只拥有一间茅屋、一条渔船、一个爱人——却比从前快乐百倍。', isEnding: true, poem: "弱水三千，只取一瓢饮。", choices: [] },

    ldaiyu_ch4_03: { id: 'ldaiyu_ch4_03', chapter: 4, title: '丹青妙手', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉不仅诗才出众，于丹青一道亦有天赋。那日她在潇湘馆中画竹，一笔一划皆见风骨。宝钗来串门，见了她的画，叹道："林妹妹的诗我自愧不如，不想画技也这般了得。"黛玉苦笑道："不过是消遣罢了。"然而她心中已隐隐有了一个念头——也许，画笔也能为她打开一扇窗。', choices: [{ text: '以画技名动京城', next: 'ldaiyu_end_11', effects: { 'attributes.talent': { add: 8 }, 'attributes.charm': { add: 3 }, 'flags.painter_path': { set: true } } }, { text: '以画寄情，不问世事', next: 'ldaiyu_end_12', effects: { 'attributes.talent': { add: 5 }, 'attributes.emotion': { add: 3 } } }] },
    ldaiyu_end_11: { id: 'ldaiyu_end_11', chapter: 5, title: '画仙传世·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉以画技名动京城，她的墨竹图被誉为"天下第一竹"。皇帝下旨召她入宫作画，她以一幅《潇湘夜雨图》感动了龙颜，获赐"潇湘画仙"之号。\n\n"借得梅花一缕魂。"\n\n她开馆授徒，教导女子习画，打破了"女子不能为画师"的成见。她的弟子遍布天下，将她的画风传承了下去。她终身未嫁，却活得比任何人都精彩——她嫁给了画，嫁给了自由。那潇湘馆中的千竿翠竹，终于有了最好的知音。', isEnding: true, poem: "借得梅花一缕魂。", choices: [] },
    ldaiyu_end_12: { id: 'ldaiyu_end_12', chapter: 5, title: '墨竹清心·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉以画寄情，不问世事。她在潇湘馆中画了千幅墨竹，每一幅都不同——风雨中的竹、月下的竹、雪中的竹、春日的竹……\n\n"质本洁来还洁去，强于污淖陷渠沟。"\n\n她的画从不示人，只留给紫鹃和自己。然而紫鹃偷偷将几幅画拿出去卖，竟引起了轰动。有人出千金求一幅墨竹，黛玉却摇头道："我的画，不卖。"她用画笔为自己筑了一道墙——墙外是纷纷扰扰的俗世，墙内是她自己的天地。那千竿翠竹，终于不再只是窗外的风景，而是她笔下的灵魂。', isEnding: true, poem: "质本洁来还洁去，强于污淖陷渠沟。", choices: [] },

    ldaiyu_ch4_04: { id: 'ldaiyu_ch4_04', chapter: 4, title: '远走江南', scene: 'daguan_yuan_gate', speaker: '旁白', text: '黛玉做了一个大胆的决定——她要离开贾府，回到江南。她想起父亲在世时，曾在扬州有一处旧宅。她对紫鹃道："与其在贾府寄人篱下，不如回江南自立。"紫鹃含泪道："姑娘去哪里，我就跟到哪里。"黛玉望着大观园的方向，心中虽有不舍，却更多的是解脱。', choices: [{ text: '在扬州开馆授徒', next: 'ldaiyu_end_13', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 }, 'flags.south_teacher': { set: true } } }, { text: '在江南寻访名医治病', next: 'ldaiyu_end_14', effects: { 'attributes.health': { add: 5 }, 'attributes.wisdom': { add: 3 }, 'flags.healing_journey': { set: true } } }] },
    ldaiyu_end_13: { id: 'ldaiyu_end_13', chapter: 5, title: '江南才女·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉回到江南，在扬州开馆授徒。她的诗社"潇湘吟社"名动江南，无数官宦家的女儿慕名而来。\n\n"半卷湘帘半掩门，碾冰为土玉为盆。"\n\n她虽远离了贾府，却从未远离诗书。她将大观园中的故事讲给弟子们听，教她们以诗言志、以才自立。她常说："女子不必依附于任何人，才情便是最好的嫁妆。"她终于不再以泪洗面，而是以微笑面对每一天。绛珠仙草不再以泪还恩，而是以桃李满天下还恩——这何尝不是最美的圆满？', isEnding: true, poem: "半卷湘帘半掩门，碾冰为土玉为盆。", choices: [] },
    ldaiyu_end_14: { id: 'ldaiyu_end_14', chapter: 5, title: '病愈重生·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉在江南寻访名医，终于遇到了一位能治她病的老大夫。老大夫道："姑娘的病，三分在身，七分在心。若能放下心事，此病可愈。"黛玉在江南的山水间渐渐放下了心中的郁结，身体竟真的慢慢好转了。\n\n"留得残荷听雨声。"\n\n她终于明白：健康才是最大的财富。她回到扬州旧宅，过起了平静的日子。她偶尔也会想起宝玉，但那些思念已不再让她痛苦——她学会了将爱化为祝福。她常在月下独坐，听着窗外的雨声，嘴角含笑。那个曾经以泪还恩的绛珠仙草，终于学会了以笑还恩。', isEnding: true, poem: "留得残荷听雨声。", choices: [] },

    ldaiyu_ch4_05: { id: 'ldaiyu_ch4_05', chapter: 4, title: '潇湘雅集', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉决定将潇湘馆开放为诗画雅集之所。她以诗会友，以画传情，吸引了京城无数才子才女前来拜访。紫鹃道："姑娘，这潇湘馆如今可热闹了。"黛玉望着满园翠竹，微微一笑："热闹也好，清净也罢，只要是我自己选的，便是好的。"', choices: [{ text: '以诗才名动京华', next: 'ldaiyu_end_15', effects: { 'attributes.talent': { add: 5 }, 'attributes.charm': { add: 3 } } }, { text: '以画艺独步天下', next: 'ldaiyu_end_16', effects: { 'attributes.talent': { add: 5 }, 'attributes.emotion': { add: 3 } } }] },
    ldaiyu_end_15: { id: 'ldaiyu_end_15', chapter: 5, title: '潇湘诗宗·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉的潇湘雅集名动天下。她的诗清新脱俗，每一首都如从天上摘下的星辰。\n\n"堪怜咏絮才。"\n\n她虽未嫁人，却活得比谁都精彩。她的弟子遍布天下，将她的诗风传承了下去。那个曾经寄人篱下、以泪洗面的林妹妹，如今已是天下女子最敬仰的诗宗。她常在月下独坐，对着千竿翠竹吟诗——绛珠仙草终于不再以泪还恩，而是以诗还恩了。', isEnding: true, poem: "可叹停机德，堪怜咏絮才。", choices: [] },
    ldaiyu_end_16: { id: 'ldaiyu_end_16', chapter: 5, title: '墨竹仙姿·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉的墨竹图被誉为"天下第一竹"。她的画中不仅有竹的风骨，更有人的灵魂。\n\n"寒塘渡鹤影，冷月葬花魂。"\n\n她将潇湘馆中的千竿翠竹一一入画，每幅都不同。有人出千金求一幅墨竹，她却摇头道："我的画，只赠有缘人。"她用画笔为自己筑了一座精神家园——墙外是纷纷扰扰的俗世，墙内是她自己的天地。那个曾经最怕孤独的女孩，终于在画中找到了永恒的陪伴。', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },

    ldaiyu_ch4_06: { id: 'ldaiyu_ch4_06', chapter: 4, title: '与君归隐', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉对宝玉道："我们离开这里吧。"宝玉愣住了，他从未想过黛玉会说出这样的话。黛玉继续道："这贾府的繁华，不过是过眼云烟。与其在这里等死，不如去过我们自己的日子。"宝玉握住她的手，郑重道："好，我们走。"两人趁着夜色，悄悄离开了贾府。', choices: [{ text: '在江南水乡安家', next: 'ldaiyu_end_17', effects: { 'relationships.jbaoyu': { add: 10 }, 'attributes.emotion': { add: 5 }, 'attributes.health': { add: 3 } } }, { text: '在山间隐居', next: 'ldaiyu_end_18', effects: { 'relationships.jbaoyu': { add: 10 }, 'attributes.wisdom': { add: 5 }, 'attributes.health': { add: 3 } } }] },
    ldaiyu_end_17: { id: 'ldaiyu_end_17', chapter: 5, title: '江南烟雨·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '黛玉与宝玉在江南水乡安了家。他们住在一条小河边，推窗便是烟雨蒙蒙的江南景色。黛玉的身体在温润的南方竟渐渐好转，她的诗也越写越好。\n\n"偷来梨蕊三分白，借得梅花一缕魂。"\n\n宝玉以书画为生，黛玉则以诗会友。他们虽失去了荣华富贵，却得到了最珍贵的东西——自由与安宁。每当桃花盛开的季节，黛玉都会想起大观园中的那些日子，但她不再悲伤——因为她知道，那些美好的记忆，已经化作了她诗中最美的句子。绛珠仙草终于不再以泪还恩，而是以笑还恩。', isEnding: true, poem: "偷来梨蕊三分白，借得梅花一缕魂。", choices: [] },
    ldaiyu_end_18: { id: 'ldaiyu_end_18', chapter: 5, title: '山间清居·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '黛玉与宝玉在山间隐居。他们建了几间茅屋，种菜养花，读书写诗。山间的空气清新，黛玉的咳嗽竟渐渐好了。\n\n"采菊东篱下，悠然见南山。"\n\n他们虽远离了红尘，却从未远离彼此。宝玉常在田间劳作时哼着小曲，黛玉在窗前写诗时嘴角含笑。他们用最朴素的方式，活出了最真实的自己。那个曾经最怕失去的少年，和那个曾经最怕孤独的少女，终于在山间找到了永恒的安宁。', isEnding: true, poem: "采菊东篱下，悠然见南山。", choices: [] },

    xbaochai_ch4_03: { id: 'xbaochai_ch4_03', chapter: 4, title: '创办女学', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗做了一个大胆的决定——她要创办一所女子学堂。她想起自己年少时被束缚的日子，想起黛玉的才情无处施展，想起探春的抱负无法实现……她对薛姨妈道："母亲，女儿不想再被金锁束缚了。我要为天下的女子做一件事。"薛姨妈虽不理解，但看着女儿眼中的坚定，终于点了头。', choices: [{ text: '以薛家之力办学', next: 'xbaochai_end_10', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 }, 'flags.educator_path': { set: true } } }, { text: '联合贾府姐妹共同办学', next: 'xbaochai_end_11', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 }, 'relationships.ldaiyu': { add: 5 }, 'relationships.tanchun': { add: 5 } } }] },
    xbaochai_end_10: { id: 'xbaochai_end_10', chapter: 5, title: '女学先驱·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗以薛家之力创办了"蘅芜女塾"，专门教导女子读书算账、经商务农。她的女塾起初备受非议，但她以过人的才干和坚韧，将女塾办得蒸蒸日上。\n\n"好风凭借力，送我上青云。"\n\n多年后，她的弟子遍布天下，有的成了商人，有的成了医者，有的成了画家——她们都用自己的方式活出了精彩的人生。宝钗常站在女塾的门口，看着那些年轻的面孔，心中涌起一股暖意。她终于不再需要冷香丸——因为她的心，终于不再被压抑了。那枚金锁，她终于可以摘下了——不是被迫，而是自愿。', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },
    xbaochai_end_11: { id: 'xbaochai_end_11', chapter: 5, title: '姐妹同心·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗联合黛玉、探春、湘云等姐妹，共同创办了"大观女塾"。黛玉教诗，宝钗教算账，探春教管理，湘云教武艺——她们各展所长，将女塾办得红红火火。\n\n"淡极始知花更艳，愁多焉得玉无痕。"\n\n她们用行动证明：女子不输男儿，团结便是最大的力量。那个曾经被金锁束缚的女孩，如今已成了天下女子的引路人。她终于明白：真正的自由，不是独自飞翔，而是带着所有人一起飞。', isEnding: true, poem: "淡极始知花更艳，愁多焉得玉无痕。", choices: [] },

    xbaochai_ch4_04: { id: 'xbaochai_ch4_04', chapter: 4, title: '周旋权贵', scene: 'rongguo_hall', speaker: '旁白', text: '宝钗以出众的才学和端庄的仪态，在京城权贵圈中如鱼得水。她不是以美色，而是以智慧赢得了所有人的尊重。她帮助薛家化解了一次又一次的危机，也暗中为贾府的姐妹们铺路搭桥。然而她心中始终有一丝不安——这种周旋于权贵之间的生活，真的是她想要的吗？', choices: [{ text: '以智慧成为幕后推手', next: 'xbaochai_end_12', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.fortune': { add: 5 }, 'flags.mastermind_path': { set: true } } }, { text: '看透权势，回归本心', next: 'xbaochai_end_13', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 5 } } }] },
    xbaochai_end_12: { id: 'xbaochai_end_12', chapter: 5, title: '幕后谋主·终章', scene: 'rongguo_hall', speaker: '旁白', text: '宝钗以智慧成为了京城最神秘的幕后谋主。她不出面，却左右着许多大事的走向。她帮助薛家度过了危机，帮助贾府避免了抄家，帮助无数女子找到了出路。\n\n"珍重芳姿昼掩门，自携手瓮灌苔盆。"\n\n没有人知道这些事是她做的——她依然是那个端庄贤淑的薛家大小姐。但她的心中，已经多了一份从容。她终于明白：真正的力量，不是站在台前，而是在幕后默默推动一切。那枚金锁，再也不是她的枷锁——而是她最坚固的铠甲。', isEnding: true, poem: "珍重芳姿昼掩门，自携手瓮灌苔盆。", choices: [] },
    xbaochai_end_13: { id: 'xbaochai_end_13', chapter: 5, title: '返璞归真·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗看透了权势的虚妄，她选择回归本心。她离开了京城的权贵圈，回到蘅芜苑中，过起了简单的生活。\n\n"淡极始知花更艳，愁多焉得玉无痕。"\n\n她不再需要冷香丸——因为她的心，终于不再被压抑了。她摘下了金锁，将它锁进了箱底。她开始做自己想做的事：读书、种花、品茶、写诗。她终于明白：真正的自由，不是拥有权力，而是拥有选择的权利。那个曾经被所有人认为"冷"的宝钗，其实是最热的那一个——只是从前，她的热情都被冷香丸压住了。', isEnding: true, poem: "淡极始知花更艳，愁多焉得玉无痕。", choices: [] },

    xiangyun_ch4_03: { id: 'xiangyun_ch4_03', chapter: 4, title: '茶道经商', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云在贾府中学会了品茶之道，她决定以此为业。她南下武夷山，学习种茶制茶，又走遍江南，了解各地的茶文化。她笑道："我史湘云，既能吃酒，也能品茶——这才是真名士！"', choices: [{ text: '打造天下第一茶庄', next: 'xiangyun_end_10', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 8 }, 'flags.tea_merchant': { set: true } } }, { text: '以茶会友，云游四方', next: 'xiangyun_end_11', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.talent': { add: 3 }, 'flags.tea_wanderer': { set: true } } }] },
    xiangyun_end_10: { id: 'xiangyun_end_10', chapter: 5, title: '茶业女王·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云打造了天下第一茶庄"云雾居"，她的茶叶从武夷山到龙井，从铁观音到普洱，无所不有。\n\n"也宜墙角也宜盆，花因喜洁难寻偶。"\n\n她成了茶业界最有权势的女商人，连皇帝都赞她的茶"天下无双"。她用财富帮助了无数女子自立，在茶庄中开设了"云雾女塾"，教导女子读书算账。那个曾经在芍药花丛中醉眠的女孩，如今已成了茶业界的传奇。', isEnding: true, poem: "也宜墙角也宜盆，花因喜洁难寻偶。", choices: [] },
    xiangyun_end_11: { id: 'xiangyun_end_11', chapter: 5, title: '茶仙云游·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云以茶会友，云游四方。她每到一处，便与当地茶人切磋茶艺，又与文人雅士品茶论诗。\n\n"惟大英雄能本色，是真名士自风流。"\n\n她将游历见闻写成了一本《云茶记》，记录了天下名茶与茶人故事。这本书后来成了茶道经典。她一生未嫁，却活得比任何人都自由——她是茶仙，是诗人，是天地间最无拘无束的云。', isEnding: true, poem: "惟大英雄能本色，是真名士自风流。", choices: [] },

    xiangyun_ch4_04: { id: 'xiangyun_ch4_04', chapter: 4, title: '创办书院', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云想起自己在史家时无书可读的日子，决定创办一所书院，让天下女子都有读书的机会。她笑道："我史湘云虽不才，却也要为天下女子争一口气！"', choices: [{ text: '以武艺和诗才办学', next: 'xiangyun_end_12', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 5 }, 'flags.academy_founder': { set: true } } }, { text: '联合姐妹们共同办学', next: 'xiangyun_end_13', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 }, 'relationships.ldaiyu': { add: 5 }, 'relationships.xbaochai': { add: 5 } } }] },
    xiangyun_end_12: { id: 'xiangyun_end_12', chapter: 5, title: '书院山长·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云创办了"枕霞书院"，自任山长。她的书院不教八股，只教诗书武艺和经商务农——她要培养的是能自立于世的女子，不是只会绣花的闺阁小姐。\n\n"萧疏白发不盈颠，守阁清灯半壁莲。"\n\n她的书院越办越大，弟子遍布天下。她常对弟子们说："人生在世，当如柳絮——随风而起，不拘一处。"那个曾经咬舌将"二"说成"爱"的女孩，如今已成了天下女子最敬仰的先生。', isEnding: true, poem: "萧疏白发不盈颠，守阁清灯半壁莲。", choices: [] },
    xiangyun_end_13: { id: 'xiangyun_end_13', chapter: 5, title: '姐妹书院·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '湘云联合黛玉、宝钗、探春等姐妹，共同创办了"大观书院"。黛玉教诗，宝钗教算账，探春教管理，湘云教武艺——她们各展所长，将书院办得红红火火。\n\n"也宜墙角也宜盆，花因喜洁难寻偶。"\n\n她们用行动证明：女子不输男儿，团结便是最大的力量。那个曾经寄人篱下的女孩，如今已成了天下女子的引路人。她常对弟子们说："我从前以为，女子只能依附于人。如今我知道，女子也可以撑起一片天。"', isEnding: true, poem: "也宜墙角也宜盆，花因喜洁难寻偶。", choices: [] },

    tanchun_ch4_03: { id: 'tanchun_ch4_03', chapter: 4, title: '以智改命', scene: 'rongguo_hall', speaker: '旁白', text: '和亲的消息传来，探春并未惊慌。她暗中调查，发现南安太妃之所以选中贾家，是因为有人从中作梗。她决定以智慧改变命运——不是逃避，而是正面迎战。她整理了一份详尽的情报，准备在和亲使臣到来之前，将局势扭转。', choices: [{ text: '以情报反制阴谋', next: 'tanchun_end_10', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.charm': { add: 3 }, 'flags.intelligence_path': { set: true } } }, { text: '主动请缨，以和亲为契机', next: 'tanchun_end_11', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.diplomat_path': { set: true } } }] },
    tanchun_end_10: { id: 'tanchun_end_10', chapter: 5, title: '智破阴谋·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春以情报反制了和亲背后的阴谋，不仅保全了自己，还揭露了朝中奸臣的阴谋。皇帝大怒，严惩了相关人等，又嘉奖了探春的才智。\n\n"才自精明志自高，生于末世运偏消。"\n\n她用行动证明：命运并非不可改变，关键在于你是否有勇气和智慧去抗争。她留在贾府，继续推行改革，最终将贾府从衰败的边缘拉了回来。那个庶出的三小姐，终于成了贾府真正的顶梁柱——不是靠出身，而是靠才智。', isEnding: true, poem: "才自精明志自高，生于末世运偏消。", choices: [] },
    tanchun_end_11: { id: 'tanchun_end_11', chapter: 5, title: '外交奇才·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春主动请缨，以和亲为契机，成为了大朝第一位女外交官。她在异国他乡以才智赢得了尊重，不仅化解了两国的矛盾，还签订了一份互利共赢的条约。\n\n"一帆风雨路三千，把骨肉家园齐来抛闪。"\n\n她用行动证明：远嫁不是终点，而是新起点。她虽身在异国，心却始终牵挂着故土。她暗中帮助贾府度过了危机，又为天下女子争取了更多的权利。那个曾经被庶出身份所困的女孩，如今已成了两国之间最受尊敬的人。', isEnding: true, poem: "一帆风雨路三千，把骨肉家园齐来抛闪。", choices: [] },

    tanchun_ch4_04: { id: 'tanchun_ch4_04', chapter: 4, title: '创办女学', scene: 'qiushuang_zhai', speaker: '旁白', text: '探春在推行改革的过程中，越来越意识到教育的重要性。她发现，许多女子之所以被命运摆布，是因为她们没有知识、没有技能。她决定创办一所女学，让天下女子都有改变命运的机会。她对宝钗道："改革只能救一时，教育才能救一世。"', choices: [{ text: '以改革家的姿态办学', next: 'tanchun_end_12', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.talent': { add: 3 }, 'flags.reform_educator': { set: true } } }, { text: '联合朝中有识之士推动', next: 'tanchun_end_13', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.political_educator': { set: true } } }] },
    tanchun_end_12: { id: 'tanchun_end_12', chapter: 5, title: '教育先驱·终章', scene: 'qiushuang_zhai', speaker: '旁白', text: '探春创办了"秋爽女学"，以改革家的姿态推动女子教育。她的女学不教八股，只教实用的知识和技能——算账、管理、医术、法律……\n\n"我但凡是个男人，可以出得去，我必早走了，立一番事业。"\n\n她终于做到了——不是以男人的身份，而是以女人的身份。她的弟子遍布天下，有的成了商人，有的成了医者，有的成了官员——她们都用自己的方式活出了精彩的人生。那个曾经被庶出身份所困的女孩，如今已成了天下女子的希望。', isEnding: true, poem: "我但凡是个男人，可以出得去，我必早走了，立一番事业。", choices: [] },
    tanchun_end_13: { id: 'tanchun_end_13', chapter: 5, title: '制度变革·终章', scene: 'rongguo_hall', speaker: '旁白', text: '探春联合朝中有识之士，推动了女子教育的制度化改革。她起草了一份《女子教育条例》，从法律层面保障了女子受教育的权利。\n\n"才自精明志自高，生于末世运偏消。"\n\n她的改革虽遭到了保守派的强烈反对，但最终在皇帝的支持下得以实施。她用制度改变了千千万万女子的命运，也用行动证明：真正的改革，不是改变一个人，而是改变一个制度。那个曾经只能在小花园中施展抱负的女孩，如今已成了推动时代进步的力量。', isEnding: true, poem: "才自精明志自高，生于末世运偏消。", choices: [] },

    wangxifeng_ch4_03: { id: 'wangxifeng_ch4_03', chapter: 4, title: '弃政从商', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐做了一个出人意料的决定——她要弃政从商。她想起自己管理贾府的那些年，其实和经商并无二致。她对平儿道："与其在贾府算计来算计去，不如到外面正大光明地做生意。"平儿惊道："奶奶，您认真的？"凤姐笑道："我什么时候开过玩笑？"', choices: [{ text: '以管理才能打造商业帝国', next: 'wangxifeng_end_09', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 8 }, 'flags.business_queen': { set: true } } }, { text: '用商业帮助贾府度过危机', next: 'wangxifeng_end_10', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 }, 'attributes.fortune': { add: 5 } } }] },
    wangxifeng_end_09: { id: 'wangxifeng_end_09', chapter: 5, title: '商界凤后·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐以管理才能打造了一个商业帝国。她的商号"凤祥号"遍布天下，从丝绸到茶叶，从药材到粮食，无所不营。\n\n"机关算尽太聪明，反误了卿卿性命。"\n\n然而这一次，她的"算计"用在了正道上。她用商业帮助了无数人，开设了"凤祥义庄"，收留无家可归的女子。她常说："我从前算计别人，如今算计的是如何让更多人活得好。"那个曾经杀伐决断的凤辣子，终于学会了用才能行善。', isEnding: true, poem: "机关算尽太聪明，反误了卿卿性命。", choices: [] },
    wangxifeng_end_10: { id: 'wangxifeng_end_10', chapter: 5, title: '商道救家·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐用商业帮助贾府度过了危机。她在贾府衰败之际，以商人的精明和手腕，将家族从悬崖边拉了回来。\n\n"一场欢喜忽悲辛，叹人世，终难定。"\n\n她不再是从前那个只会算计的凤辣子，而是一个能撑起家族的顶梁柱。她用银子赎回了被卖的下人，用关系保住了贾府的根基。贾母老泪纵横："凤丫头，你受苦了。"凤姐笑道："老祖宗，我从前是算计别人，如今是算计着怎么让这个家好起来——这何尝不是一种本事？"', isEnding: true, poem: "一场欢喜忽悲辛，叹人世，终难定。", choices: [] },

    wangxifeng_ch4_04: { id: 'wangxifeng_ch4_04', chapter: 4, title: '行善济世', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐做了一个令所有人震惊的决定——她要将余生用来行善。她想起了那些被她伤害过的人：尤二姐、张金哥、守备之子……她对他们亏欠太多，如今她要一一偿还。她对平儿道："我这一生，前半生作恶，后半生行善，也算扯平了。"平儿含泪道："奶奶能这样想，便是最大的善。"', choices: [{ text: '散尽家财，建立慈善机构', next: 'wangxifeng_end_11', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 5 }, 'flags.philanthropist': { set: true } } }, { text: '以善行感化身边人', next: 'wangxifeng_end_12', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 5 }, 'flags.good_influence': { set: true } } }] },
    wangxifeng_end_11: { id: 'wangxifeng_end_11', chapter: 5, title: '大善人·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐散尽家财，建立了一系列慈善机构：义庄收留无家可归之人，药局免费为穷人看病，学堂让贫家子弟有书可读。\n\n"势败休云贵，家亡莫论亲。"\n\n她的善行感动了无数人，那些曾经恨她的人，如今也对她刮目相看。她的身体在忙碌中竟渐渐好转。她常对人说："我这一生，前半生算计别人，后半生算计自己。如今算明白了——人生最大的聪明，是善良。"那个曾经最精明的女人，终于用善良赎回了自己的灵魂。', isEnding: true, poem: "势败休云贵，家亡莫论亲。", choices: [] },
    wangxifeng_end_12: { id: 'wangxifeng_end_12', chapter: 5, title: '春风化雨·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐以善行感化了身边人。她不再像从前那样严厉，而是以温和的方式影响着每一个人。她帮助巧姐学会了自立，帮助平儿找到了自己的幸福，帮助贾琏改掉了花心的毛病。\n\n"一场欢喜忽悲辛，叹人世，终难定。"\n\n她常说："从前我以为，掌控一切才是力量。如今我知道，温柔也是一种力量。"那个曾经杀伐决断的凤辣子，在放下执念之后，反而找到了真正的幸福。她用温柔改变了自己，也改变了身边的人。', isEnding: true, poem: "一场欢喜忽悲辛，叹人世，终难定。", choices: [] },

    liwan_ch3_02: { id: 'liwan_ch3_02', chapter: 3, title: '著书立说', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨在教子之余，开始将自己的所思所感写成文字。她写诗社的往事，写姐妹们的悲欢，写稻香村中的四季更替……她发现，写作让她重新找到了生活的意义。她对贾兰道："你父亲若在，定会支持母亲这样做。"贾兰认真道："母亲写的东西，儿子一定好好保存。"', choices: [{ text: '以文字记录大观园往事', next: 'liwan_end_05', effects: { 'attributes.talent': { add: 5 }, 'attributes.wisdom': { add: 3 }, 'flags.writer_liwan': { set: true } } }, { text: '以文字教导天下女子', next: 'liwan_end_06', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 }, 'flags.educator_liwan': { set: true } } }] },
    liwan_end_05: { id: 'liwan_end_05', chapter: 5, title: '稻香笔耕·终章', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨用文字记录了大观园中的往事，写成了一部《稻香随笔》。书中记录了诗社的盛况、姐妹们的才情、贾府的兴衰……字字平淡，却字字含情。\n\n"竹篱茅舍自甘心，何求粉白与黛绿。"\n\n她的书虽不如宝玉的《石头记》那般轰动，却以另一种方式流传于世——后人读之，如饮一杯清茶，平淡中见真味。她终于不再只是贾兰的母亲，而是一个有自己声音的人。那个曾经如槁木死灰的李纨，用文字为自己的人生画上了最温暖的句号。', isEnding: true, poem: "竹篱茅舍自甘心，何求粉白与黛绿。", choices: [] },
    liwan_end_06: { id: 'liwan_end_06', chapter: 5, title: '女诫新编·终章', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨以文字教导天下女子，写成了一部《女诫新编》。与旧版《女诫》不同，她的书不是教女子如何顺从，而是教女子如何自立。\n\n"镜里恩情，更那堪梦里功名！"\n\n她在书中写道："女子之德，不在贞节，而在自强；女子之才，不在女红，而在见识。"这本书虽遭到了保守派的攻击，却在民间广为流传，成了无数女子的精神支柱。那个曾经默默无闻的稻香老农，用文字改变了千千万万女子的命运。', isEnding: true, poem: "镜里恩情，更那堪梦里功名！", choices: [] },

    liwan_ch3_03: { id: 'liwan_ch3_03', chapter: 3, title: '创办义学', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨在稻香村中创办了一所义学，专门收留贫家子弟和孤儿。她教他们读书识字，教他们做人的道理。她对贾兰道："你将来做了官，要记得帮助那些和你一样出身贫寒的孩子。"贾兰郑重点头。', choices: [{ text: '以教育改变更多人的命运', next: 'liwan_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 }, 'flags.charity_school': { set: true } } }, { text: '与贾兰共同办学', next: 'liwan_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.family_school': { set: true } } }] },
    liwan_end_07: { id: 'liwan_end_07', chapter: 5, title: '桃李满门·终章', scene: 'daoxiang_cun', speaker: '旁白', text: '李纨的义学越办越大，弟子遍布天下。她虽仍是那个低调的稻香老农，但她的影响力已远超贾府的围墙。\n\n"桃李春风一杯酒，江湖夜雨十年灯。"\n\n她用教育改变了无数人的命运，也用行动证明：寡妇不是废人，母亲也可以有自己的事业。她常站在义学的门口，看着那些年轻的面孔，心中涌起一股暖意。那个曾经如槁木死灰的李纨，终于如枯木逢春，绽放出了属于自己的光彩。', isEnding: true, poem: "桃李春风一杯酒，江湖夜雨十年灯。", choices: [] },
    liwan_end_08: { id: 'liwan_end_08', chapter: 5, title: '母子同心·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾兰金榜题名后，与母亲共同办学。他以官员的身份推动教育改革，李纨则以经验指导教学实践。母子同心，将义学办成了京城最有名的学堂之一。\n\n"镜里恩情，更那堪梦里功名！那美韶华去之何迅！"\n\n李纨看着学堂中朗朗的读书声，终于露出了发自内心的笑容。她对贾兰道："你父亲若在天有灵，定会为你骄傲。"贾兰握着母亲的手道："儿子最骄傲的，是有您这样的母亲。"那个曾经默默无闻的稻香老农，终于以自己的方式，成为了最有影响力的人。', isEnding: true, poem: "镜里恩情，更那堪梦里功名！那美韶华去之何迅！", choices: [] },

    miaoyu_ch3_02: { id: 'miaoyu_ch3_02', chapter: 3, title: '茶道悟禅', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉在栊翠庵中悟出了一条新路——以茶悟禅。她发现，泡茶的过程本身就是一种修行：选水、烧火、候汤、注水……每一个步骤都需要专注和耐心。她对来访的宝钗道："从前我以为修行就是打坐念经，如今我知道，泡一壶好茶，也是一种修行。"', choices: [{ text: '以茶道开宗立派', next: 'miaoyu_end_06', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.talent': { add: 3 }, 'flags.tea_master': { set: true } } }, { text: '以茶道度化世人', next: 'miaoyu_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 5 }, 'flags.tea_enlightener': { set: true } } }] },
    miaoyu_end_06: { id: 'miaoyu_end_06', chapter: 5, title: '茶道宗师·终章', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉以茶道开宗立派，创立了"梅花茶派"。她的茶道讲究"清、静、和、雅"，与禅宗的"戒、定、慧"相呼应。\n\n"一杯为品，二杯即是解渴的蠢物，三杯便是饮驴了。"\n\n她的弟子遍布天下，将她的茶道传承了下去。她虽身在空门，却不再被困住——她用茶道找到了属于自己的自由。她常对弟子们说："茶如人生，苦尽甘来。品茶即是品人生。"那个曾经欲洁何曾洁的槛外人，终于以茶悟道，找到了真正的清净。', isEnding: true, poem: "一杯为品，二杯即是解渴的蠢物，三杯便是饮驴了。", choices: [] },
    miaoyu_end_07: { id: 'miaoyu_end_07', chapter: 5, title: '以茶度人·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '妙玉以茶道度化世人。她走出栊翠庵，在京城开设了一间茶室"梅雪居"，以茶会友，以茶度人。\n\n"气质美如兰，才华阜比仙。"\n\n她不再嫌弃任何人——无论是达官贵人还是贩夫走卒，她都以平等之心待之。她用一杯茶化解了无数人的烦恼，也用茶道教会了人们如何在纷扰的世间保持内心的平静。那个曾经目下无人的槛外人，终于成为了一个真正慈悲的人。', isEnding: true, poem: "气质美如兰，才华阜比仙。", choices: [] },

    miaoyu_ch3_03: { id: 'miaoyu_ch3_03', chapter: 3, title: '以医入道', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉在修行之余，研习医术。她发现，佛家讲"慈悲为怀"，而医术正是慈悲的最好体现。她开始为庵附近的穷人看病，以草药和针灸济世救人。她对来访的黛玉道："从前我以为修行就是远离红尘，如今我知道，救人才是最好的修行。"', choices: [{ text: '以医术济世救人', next: 'miaoyu_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 5 }, 'flags.healer_miaoyu': { set: true } } }, { text: '以医术和佛学双修', next: 'miaoyu_end_09', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.talent': { add: 3 }, 'flags.dual_path': { set: true } } }] },
    miaoyu_end_08: { id: 'miaoyu_end_08', chapter: 5, title: '医者仁心·终章', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉以医术济世救人，成了远近闻名的"尼姑大夫"。她不再困在栊翠庵中，而是背着药箱走村串户，为穷人免费看病。\n\n"欲洁何曾洁，云空未必空。"\n\n她终于明白了：真正的洁净，不是远离污浊，而是在污浊中保持内心的清明。她用医术救了无数人的命，也用慈悲救了自己的心。那个曾经欲洁何曾洁的槛外人，终于以医入道，找到了真正的解脱。', isEnding: true, poem: "欲洁何曾洁，云空未必空。", choices: [] },
    miaoyu_end_09: { id: 'miaoyu_end_09', chapter: 5, title: '医佛双修·终章', scene: 'gufang_bridge', speaker: '旁白', text: '妙玉以医术和佛学双修，创立了"梅花禅医"一派。她将佛学的智慧融入医术，以禅定之力辅助诊疗，以慈悲之心对待每一位病人。\n\n"纵有千年铁门槛，终须一个土馒头。"\n\n她的弟子遍布天下，将她的"梅花禅医"传承了下去。她虽身在空门，却不再被困住——她用医术和佛学，找到了属于自己的道路。她常对弟子们说："医身不如医心，医心不如医己。能医己者，方能医人。"那个曾经孤高自许的槛外人，终于以双修之道，达到了真正的超脱。', isEnding: true, poem: "纵有千年铁门槛，终须一个土馒头。", choices: [] },

    qingwen_ch3_02: { id: 'qingwen_ch3_02', chapter: 3, title: '独立工匠', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯被逐出贾府后，并未消沉。她以精湛的绣技和针线活谋生，在京城开了一间小铺子"芙蓉绣坊"。她的绣品一针一线皆见功夫，很快便声名远扬。她常对人说："我晴雯，不靠任何人，一样能活出个样子来！"', choices: [{ text: '以绣技成为京城名匠', next: 'qingwen_end_06', effects: { 'attributes.talent': { add: 8 }, 'attributes.fortune': { add: 5 }, 'flags.master_craftswoman': { set: true } } }, { text: '收徒传艺，帮助更多女子', next: 'qingwen_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 3 }, 'flags.embroidery_teacher': { set: true } } }] },
    qingwen_end_06: { id: 'qingwen_end_06', chapter: 5, title: '一代名匠·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯以绣技成为京城最有名的女工匠。她的绣品被誉为"芙蓉绣"，一针一线皆见风骨。连宫中的采办都慕名而来，请她绣龙袍凤冠。\n\n"其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁。"\n\n她虽不再是怡红院中的丫鬟，却活得比从前更加精彩。她常说："从前我的手艺只给一个人看，如今给天下人看——这才是我晴雯该有的样子。"那个心比天高的女孩，终于以自己的方式，活出了最精彩的人生。', isEnding: true, poem: "其为质则金玉不足喻其贵，其为性则冰雪不足喻其洁。", choices: [] },
    qingwen_end_07: { id: 'qingwen_end_07', chapter: 5, title: '绣艺传人·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯收徒传艺，帮助更多女子以绣技自立。她的"芙蓉绣坊"成了京城女子学艺的圣地，无数贫苦女子在这里找到了谋生的手段。\n\n"霁月难逢，彩云易散。心比天高，身为下贱。风流灵巧招人怨。"\n\n她常对弟子们说："我从前以为，手艺只是消遣。如今我知道，手艺是女人最好的嫁妆——不靠天，不靠地，只靠自己的双手。"那个曾经被逐出贾府的女孩，如今已成了无数女子的引路人。', isEnding: true, poem: "霁月难逢，彩云易散。心比天高，身为下贱。风流灵巧招人怨。", choices: [] },

    qingwen_ch3_03: { id: 'qingwen_ch3_03', chapter: 3, title: '入班唱戏', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯被逐出贾府后，偶然遇到了一个戏班班主。班主见她容貌出众、嗓音清亮，便邀她入班唱戏。晴雯起初犹豫——她一个清白女子，怎能去唱戏？但转念一想：唱戏又如何？戏台上的人物，哪个不是活出了真性情？她一咬牙，加入了戏班。', choices: [{ text: '以真性情成为名角', next: 'qingwen_end_08', effects: { 'attributes.talent': { add: 8 }, 'attributes.charm': { add: 5 }, 'flags.opera_star': { set: true } } }, { text: '用戏曲为女子发声', next: 'qingwen_end_09', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 5 }, 'flags.opera_rebel': { set: true } } }] },
    qingwen_end_08: { id: 'qingwen_end_08', chapter: 5, title: '梨园名角·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯以真性情成了梨园中最耀眼的名角。她唱的《牡丹亭》杜丽娘，让无数人潸然泪下；她演的《西厢记》红娘，让观众拍案叫绝。\n\n"风流灵巧招人怨。"\n\n她虽是戏子，却活得比大多数人都真实。她常说："戏台上的人生，比戏台下的人生更真——因为戏台上的人，敢爱敢恨。"那个曾经在怡红院中撕扇子的率真女孩，如今已成了梨园中最传奇的名角。她的戏，永远只演真性情。', isEnding: true, poem: "风流灵巧招人怨。", choices: [] },
    qingwen_end_09: { id: 'qingwen_end_09', chapter: 5, title: '戏中巾帼·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '晴雯用戏曲为女子发声。她改编了许多传统剧目，让女主角不再是柔弱的牺牲品，而是有血有肉、敢爱敢恨的真实人物。\n\n"寿夭多因毁谤生，多情公子空牵念。"\n\n她的戏引起了巨大的反响——有人骂她离经叛道，有人赞她敢为人先。但她从不在意，她只演自己想演的戏。她常对弟子们说："戏如人生，人生如戏。但无论是戏是人生，女子都该做自己的主角。"那个曾经被逐出贾府的女孩，如今用戏曲改变了无数女子的命运。', isEnding: true, poem: "寿夭多因毁谤生，多情公子空牵念。", choices: [] },

    xiren_ch3_02: { id: 'xiren_ch3_02', chapter: 3, title: '助夫经商', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人嫁给了蒋玉菡后，发现他在生意上并不精明。她以在贾府学到的管理才能，帮助蒋玉菡打理戏班和店铺。她笑道："从前我替宝玉管怡红院，如今替你管家——倒是一脉相承。"', choices: [{ text: '将戏班做成京城第一', next: 'xiren_end_06', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 5 }, 'flags.business_wife': { set: true } } }, { text: '开创自己的事业', next: 'xiren_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 }, 'flags.independent_wife': { set: true } } }] },
    xiren_end_06: { id: 'xiren_end_06', chapter: 5, title: '贤内助·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人帮助蒋玉菡将戏班做成了京城第一。她以温柔和顺的方式管理着一切——对上不卑不亢，对下宽严有度。\n\n"花气袭人知骤暖，鹊声穿树喜新晴。"\n\n她终于找到了自己的价值——不是作为宝玉的丫鬟，而是作为蒋玉菡的妻子和伙伴。她常对蒋玉菡道："从前我以为，温柔就是顺从。如今我知道，温柔也可以是一种力量。"那个曾经只会为别人而活的袭人，终于学会了为自己而活——也为自己爱的人而活。', isEnding: true, poem: "花气袭人知骤暖，鹊声穿树喜新晴。", choices: [] },
    xiren_end_07: { id: 'xiren_end_07', chapter: 5, title: '女掌柜·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人在帮助蒋玉菡之余，开创了自己的事业——她开了一间"花袭人茶铺"，以在贾府学到的茶艺和待客之道，将茶铺经营得风生水起。\n\n"桃红又是一年春，花气袭人知骤暖。"\n\n她不再是任何人的丫鬟，也不是任何人的附庸——她是一个独立的女商人。她常对人说："从前我以为，女人只能依附于男人。如今我知道，女人也可以撑起一片天。"那个温柔和顺的袭人，终于也有了自己的骨气和骄傲。', isEnding: true, poem: "桃红又是一年春，花气袭人知骤暖。", choices: [] },

    xiren_ch3_03: { id: 'xiren_ch3_03', chapter: 3, title: '创办女工坊', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人想起了那些和她一样出身贫寒的丫鬟们，她们除了伺候人，什么都不会。袭人决定创办一间女工坊，教她们做针线、织布、染衣——让她们有一技之长，不必再依附于人。她对蒋玉菡道："我从前是丫鬟，我知道那种无依无靠的滋味。我不想别人再走我的老路。"', choices: [{ text: '以工坊帮助更多女子自立', next: 'xiren_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 5 }, 'flags.workshop_founder': { set: true } } }, { text: '联合其他姐妹共同创办', next: 'xiren_end_09', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 }, 'relationships.qingwen': { add: 5 } } }] },
    xiren_end_08: { id: 'xiren_end_08', chapter: 5, title: '女工之光·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人的女工坊越办越大，帮助了无数女子以一技之长自立于世。她的工坊不仅教针线活，还教读书算账——她要让每一个女子都有选择自己命运的权利。\n\n"枉自温柔和顺，空云似桂如兰。"\n\n她常对工坊中的女子们说："从前我只会伺候人，如今我学会了为自己而活。你们也可以。"那个温柔和顺的袭人，终于用行动证明：温柔不是软弱，而是最坚韧的力量。', isEnding: true, poem: "枉自温柔和顺，空云似桂如兰。", choices: [] },
    xiren_end_09: { id: 'xiren_end_09', chapter: 5, title: '姐妹工坊·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '袭人联合晴雯等姐妹，共同创办了"芙蓉女工坊"。袭人负责管理和销售，晴雯负责技艺指导——两人配合默契，将工坊办得红红火火。\n\n"花气袭人知骤暖，鹊声穿树喜新晴。"\n\n她们用行动证明：女子不输男儿，团结便是最大的力量。那个曾经只会为别人而活的袭人，和那个心比天高的晴雯，终于携手走出了属于她们自己的路。她们常说："从前我们是主仆，如今我们是姐妹——这便是最好的结局。"', isEnding: true, poem: "花气袭人知骤暖，鹊声穿树喜新晴。", choices: [] },

    cross_ch1_01: { id: 'cross_ch1_01', chapter: 4, title: '大观联盟', scene: 'qiushuang_zhai', speaker: '旁白', text: '贾府风雨飘摇，探春召集众姐妹商议对策。黛玉、宝钗、湘云、李纨齐聚秋爽斋。探春道："贾府若倒，我们谁也跑不掉。与其坐以待毙，不如联手自救。"黛玉道："三妹妹说得对。我们虽是女子，却也不是任人摆布的棋子。"宝钗沉吟道："薛家的关系或许能用上。"湘云拍案道："干就完了！"众人相视而笑——这是大观园中第一次，女子们联手决定自己的命运。', choices: [{ text: '以商业挽救贾府', next: 'cross_end_01', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 5 }, 'flags.alliance_business': { set: true } } }, { text: '以改革重振贾府', next: 'cross_end_02', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 3 }, 'flags.alliance_reform': { set: true } } }, { text: '以才学赢得朝中支持', next: 'cross_end_03', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 5 }, 'flags.alliance_talent': { set: true } } }, { text: '离开贾府，各自闯荡', next: 'cross_end_04', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.emotion': { add: 3 }, 'flags.alliance_depart': { set: true } } }] },
    cross_end_01: { id: 'cross_end_01', chapter: 5, title: '商道救家·终章', scene: 'rongguo_hall', speaker: '旁白', text: '众姐妹以商业挽救了贾府。宝钗负责薛家的商业网络，探春负责管理改革，黛玉以诗才赢得名流支持，湘云以豪爽结交江湖朋友——她们各展所长，将贾府从悬崖边拉了回来。\n\n"好风凭借力，送我上青云。"\n\n她们用行动证明：女子不输男儿，团结便是最大的力量。贾府虽不复当年之盛，却至少保住了根基。更重要的是，她们终于掌握了自己的命运——不再是任人摆布的棋子，而是自己人生的主人。大观园中的姐妹们，终于联手创造了奇迹。', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },
    cross_end_02: { id: 'cross_end_02', chapter: 5, title: '改革重生·终章', scene: 'rongguo_hall', speaker: '旁白', text: '众姐妹以改革重振了贾府。探春推行管理改革，宝钗负责财务重组，黛玉以才学赢得朝中支持，湘云以武艺保护园中安全——她们各展所长，将贾府从衰败的边缘拉了回来。\n\n"才自精明志自高，生于末世运偏消。"\n\n她们用行动证明：改革不是男人的专利，女子一样可以力挽狂澜。贾府虽不复当年之盛，却至少保住了根基。更重要的是，她们终于掌握了自己的命运。大观园中的姐妹们，终于联手创造了奇迹。', isEnding: true, poem: "才自精明志自高，生于末世运偏消。", choices: [] },
    cross_end_03: { id: 'cross_end_03', chapter: 5, title: '才女联盟·终章', scene: 'rongguo_hall', speaker: '旁白', text: '众姐妹以才学赢得了朝中支持。黛玉的诗感动了皇帝，宝钗的策论赢得了大臣们的赞赏，探春的改革方案得到了实施，湘云的武艺赢得了军方的尊重——她们各展所长，为贾府赢得了喘息之机。\n\n"可叹停机德，堪怜咏絮才。"\n\n她们用行动证明：才学是最好的武器，女子不输男儿。贾府虽不复当年之盛，却至少保住了根基。更重要的是，她们终于掌握了自己的命运。大观园中的姐妹们，终于联手创造了奇迹。', isEnding: true, poem: "可叹停机德，堪怜咏絮才。", choices: [] },
    cross_end_04: { id: 'cross_end_04', chapter: 5, title: '各奔天涯·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '众姐妹决定离开贾府，各自闯荡。黛玉回了江南开馆授徒，宝钗接管了薛家生意，探春出海经商，湘云仗剑江湖，李纨守着义学教书，妙玉以茶道悟禅，晴雯以绣技成名，袭人开了茶铺——她们虽天各一方，却始终心系彼此。\n\n"好一似食尽鸟投林，落了片白茫茫大地真干净。"\n\n她们用各自的方式活出了精彩的人生，也用行动证明：女子不输男儿，命运掌握在自己手中。每年清明，她们都会回到大观园的废墟前，放一束花，饮一杯酒，回忆那些再也回不去的日子。她们虽各奔天涯，却永远是大观园中的姐妹。', isEnding: true, poem: "好一似食尽鸟投林，落了片白茫茫大地真干净。", choices: [] },

    cross_ch2_01: { id: 'cross_ch2_01', chapter: 4, title: '凤探联手', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐找到探春，提出了一个出人意料的提议："三丫头，我们联手吧。"探春惊讶地看着她。凤姐继续道："我管了这么多年家，知道贾府的每一个窟窿。你有改革的魄力，我有周旋的手段——我们联手，或许还能救这个家。"探春沉吟片刻，伸出手道："好，我们联手。"', choices: [{ text: '以铁腕手段推行改革', next: 'cross_end_05', effects: { 'attributes.wisdom': { add: 8 }, 'attributes.fortune': { add: 5 }, 'flags.iron_reform': { set: true } } }, { text: '以怀柔策略稳住局面', next: 'cross_end_06', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.charm': { add: 5 }, 'flags.soft_reform': { set: true } } }] },
    cross_end_05: { id: 'cross_end_05', chapter: 5, title: '铁腕救家·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐与探春联手，以铁腕手段推行改革。凤姐负责清理贾府中的蛀虫，探春负责推行新的管理制度——一文一武，配合默契。\n\n"机关算尽太聪明，反误了卿卿性命。"\n\n然而这一次，凤姐的"算计"用在了正道上。她们用铁腕手段将贾府从悬崖边拉了回来，虽得罪了不少人，却保住了家族的根基。贾母老泪纵横："若非你们两个，贾家怕是早就完了。"那个曾经算尽天下的凤辣子和那个庶出的三小姐，终于联手创造了奇迹。', isEnding: true, poem: "机关算尽太聪明，反误了卿卿性命。", choices: [] },
    cross_end_06: { id: 'cross_end_06', chapter: 5, title: '怀柔安邦·终章', scene: 'rongguo_hall', speaker: '旁白', text: '凤姐与探春联手，以怀柔策略稳住局面。凤姐以她的交际手腕安抚了各方势力，探春以她的管理才能推行了温和的改革——一柔一刚，相得益彰。\n\n"一场欢喜忽悲辛，叹人世，终难定。"\n\n她们用怀柔策略将贾府从悬崖边拉了回来，虽改革不如铁腕那般彻底，却赢得了更多人的支持。贾母欣慰道："你们两个，一个能说，一个能做——真是天作之合。"那个曾经杀伐决断的凤辣子和那个庶出的三小姐，终于联手创造了奇迹。', isEnding: true, poem: "一场欢喜忽悲辛，叹人世，终难定。", choices: [] },

    cross_ch3_01: { id: 'cross_ch3_01', chapter: 4, title: '黛云同行', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉对湘云道："云妹妹，你我不如一起离开这里。"湘云惊讶地看着她。黛玉继续道："你不想再回史家受气，我也不愿在贾府等死。我们结伴远行，或许能找到属于自己的天地。"湘云拍案道："好！林姐姐，我跟你走！"两个女子，一个多愁善感，一个豪爽不羁，竟在这一刻做出了同样的选择。', choices: [{ text: '结伴游历天下', next: 'cross_end_07', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.talent': { add: 5 }, 'flags.travel_together': { set: true } } }, { text: '在江南开馆授徒', next: 'cross_end_08', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.fortune': { add: 3 }, 'flags.teach_together': { set: true } } }] },
    cross_end_07: { id: 'cross_end_07', chapter: 5, title: '双姝行纪·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '黛玉与湘云结伴游历天下。黛玉以诗记录所见所闻，湘云以武保护两人安全——一文一武，配合默契。她们走过繁华的市集，走过荒凉的边塞，走过烟雨的江南，走过苍茫的大漠……\n\n"寒塘渡鹤影，冷月葬花魂。"\n\n她们将游历见闻写成了一部《双姝行纪》，记录了天下风物与人情百态。这本书后来成了畅销一时的游记。她们虽天各一方，却始终心系彼此。那个多愁善感的林妹妹和那个豪爽不羁的云妹妹，终于在旅途中找到了属于自己的天地。', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },
    cross_end_08: { id: 'cross_end_08', chapter: 5, title: '江南双馆·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉与湘云在江南开馆授徒。黛玉教诗，湘云教武——一文一武，相得益彰。她们的"潇湘枕霞馆"很快名动江南，无数官宦家的女儿慕名而来。\n\n"半卷湘帘半掩门，碾冰为土玉为盆。"\n\n她们用行动证明：女子不输男儿，团结便是最大的力量。黛玉的身体在江南的温润气候中竟渐渐好转，湘云也终于找到了属于自己的归宿。那个多愁善感的林妹妹和那个豪爽不羁的云妹妹，终于在江南找到了属于自己的天地。', isEnding: true, poem: "半卷湘帘半掩门，碾冰为土玉为盆。", choices: [] },

    jiamu_ch2_03: { id: 'jiamu_ch2_03', chapter: 2, title: '暗中布局', scene: 'rongguo_hall', speaker: '旁白', text: '贾母虽未明言，却已在暗中布局。她召来探春，道："三丫头，你来帮我管这个家。"又召来黛玉，道："好孩子，外祖母有些话要交代你。"她虽年事已高，却依然有着过人的洞察力——她看出了王熙凤的中饱私囊，看出了王夫人的暗中排挤，看出了贾府的千疮百孔。她决定在最后的日子里，为孙辈们铺好路。', choices: [{ text: '将管家之权交给探春', next: 'jiamu_end_06', effects: { 'relationships.tanchun': { add: 5 }, 'attributes.wisdom': { add: 5 }, 'flags.power_to_tanchun': { set: true } } }, { text: '为黛玉争取婚约', next: 'jiamu_end_07', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 5 }, 'flags.secure_daiyu': { set: true } } }] },
    jiamu_end_06: { id: 'jiamu_end_06', chapter: 5, title: '托孤传权·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母将管家之权交给了探春，又暗中安排了黛玉的婚事。她以雷霆手段清洗了贾府中的蛀虫，为探春的改革扫清了障碍。\n\n"假作真时真亦假，无为有处有还无。"\n\n她终于以最后的力量挽救了贾府。探春不负所托，将贾府治理得井井有条；黛玉也在贾母的安排下与宝玉结为连理。贾母看着这一切，终于可以安心了。她拉着探春的手道："三丫头，这个家就交给你了。"又拉着黛玉的手道："好孩子，以后这里就是你的家。"那个曾经犹豫不决的老太太，在最后关头展现出了惊人的魄力。', isEnding: true, poem: "假作真时真亦假，无为有处有还无。", choices: [] },
    jiamu_end_07: { id: 'jiamu_end_07', chapter: 5, title: '慈母之心·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾母力排众议，为黛玉争取了婚约。她当众宣布："宝玉和黛玉的婚事，我早就定下了。谁也不许反对！"王夫人虽不甘心，却不敢违逆贾母的意思。\n\n"满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？"\n\n黛玉泪如雨下，伏在贾母膝上。贾母抚摸着她的头发，轻声道："好孩子，外祖母对不住你，让你受了这么多年的苦。以后不会了。"那个曾经最疼爱黛玉的老太太，终于用最后的力量，为她最疼爱的外孙女撑起了一片天。', isEnding: true, poem: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", choices: [] },

    baoyu_liuguniang_01: { id: 'baoyu_liuguniang_01', chapter: 2, title: '刘姥姥进大观园', scene: 'daguan_yuan_gate', speaker: '旁白', text: '那日刘姥姥二进荣国府，贾母带她游览大观园。这个乡下老妇人见什么都新鲜，说话也逗趣得很——"这屋子比我们那儿的仓房还大！""这花儿怎么长得跟盘子似的？"\n\n众人被她逗得前仰后合。黛玉笑道："她是哪一门子的姥姥？倒像是个女清客！"湘云更是笑得直不起腰来。\n\n然而宝玉却从刘姥姥身上看到了一种他从未有过的东西——那种质朴、那种生命力、那种对生活最纯粹的热爱。他想：也许真正幸福的，不是这些锦衣玉食的人，而是像刘姥姥这样知足常乐的普通人。', choices: [{ text: '与刘姥姥攀谈', next: 'baoyu_liuguniang_02', effects: { 'attributes.wisdom': { add: 2 }, 'attributes.emotion': { add: 1 } } }, { text: '在一旁看热闹', next: 'baoyu_liuguniang_03', effects: { 'attributes.charm': { add: 1 } } }] },
    baoyu_liuguniang_02: { id: 'baoyu_liuguniang_02', chapter: 2, title: '村妪智慧', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉私下找到刘姥姥，向她请教乡间的事。刘姥姥道："二爷，您问这些做什么？"宝玉道："我总觉得……城里人的日子过得太累了，想看看你们乡下人是怎么活的。"\n\n刘姥姥想了想，道："我们乡下人啊，没什么大志向。春天种地，秋天收粮，冬天围着火炉嗑瓜子。日子虽苦，但心里踏实。"宝玉听了，若有所思。\n\n"踏实"两个字，在他心中久久回荡。他活了这么多年，可曾有过一天是"踏实"的？', choices: [{ text: '向往田园生活', next: 'baoyu_ch3_01', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '继续思考人生意义', next: 'baoyu_ch3_01', effects: { 'attributes.emotion': { add: 1 } } }] },
    baoyu_liuguniang_03: { id: 'baoyu_liuguniang_03', chapter: 2, title: '笑看众生', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉在一旁观看着刘姥姥与众人互动。他发现一个有趣的现象：那些平日里高高在上的主子们，此刻都被这个乡下老妇人逗得开怀大笑；而刘姥姥虽然看似卑微，却能用自己的方式让所有人都快乐起来。\n\n"谁说地位高就一定幸福？"宝玉暗想，"刘姥姥的笑容，比许多王公贵族都要真诚得多。"\n\n这一刻，他对"富贵"二字有了新的理解。', choices: [{ text: '回到怡红院思考', next: 'baoyu_ch3_01', effects: { 'attributes.wisdom': { add: 1 } } }] },

    baoyu_chaojian_01: { id: 'baoyu_chaojian_01', chapter: 3, title: '抄检大观园', scene: 'yihong_yuan', speaker: '旁白', text: '那是一个令人窒息的夜晚。王夫人命人抄检大观园，搜查各房中的"违禁之物"。凤姐带着一群婆子丫鬟，挨个房间翻箱倒柜。\n\n先搜了黛玉的潇湘馆，搜出了一些男子的旧物——那是宝玉从前送她的东西。凤姐不动声色地将它们收了起来。\n\n接着到了怡红院。晴雯正气得浑身发抖，将箱子里的东西一股脑倒在地下："要搜就搜！我晴雯光明磊落，没什么见不得人的！"\n\n宝玉站在一旁，拳头攥得发白。这是他的家，这些人都是他在乎的人——可是他却连保护他们的能力都没有。\n\n"原来这就是权势。"他心中冷笑，"它可以肆无忌惮地践踏任何人的尊严。"', choices: [{ text: '试图阻止抄检', next: 'baoyu_chaojian_02', effects: { 'attributes.emotion': { add: 3 }, 'attributes.wisdom': { add: -1 } } }, { text: '忍气吞声，暗中记恨', next: 'baoyu_chaojian_02b', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_chaojian_02: { id: 'baoyu_chaojian_02', chapter: 3, title: '挺身而出', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉忍不住站了出来，挡在晴雯面前："住手！这些都是我的东西，有什么责任我来担！"凤姐皱眉道："宝兄弟，这不是你能管的事。"宝玉道："这是我的院子，我的丫头，凭什么让你们这样欺负？"\n\n空气瞬间凝固了。所有人都没想到，一向温顺的宝玉竟敢说出这样的话。\n\n最终，还是袭人将他拉到一旁，低声道："二爷，您这样只会让事情更糟。太太已经下定决心了，谁也拦不住。"\n\n宝玉颓然坐下，看着晴雯被带走的背影，泪流满面。', choices: [{ text: '发誓要救晴雯', next: 'baoyu_qingwen_death_01', effects: { 'relationships.qingwen': { add: 8 }, 'attributes.emotion': { add: 4 } } }] },
    baoyu_chaojian_02b: { id: 'baoyu_chaojian_02b', chapter: 3, title: '隐忍待机', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉选择隐忍。他知道此刻反抗只会让情况更糟，但他将这一切都记在了心中——王夫人的冷酷、凤姐的助纣为虐、袭人的背叛……\n\n抄检结束后，他独自坐在窗前，望着夜空中的月亮。月光如水，照在他苍白的脸上。\n\n"总有一天……"他喃喃自语，"总有一天，我要让这些人付出代价。"\n\n从那天起，宝玉变了。他不再是那个天真烂漫的少年，而是开始学会了隐藏自己的真实情感，学会了在这复杂的家族中生存。', choices: [{ text: '等待时机', next: 'baoyu_qingwen_death_01', effects: { 'attributes.wisdom': { add: 3 } } }] },

    baoyu_qingwen_death_01: { id: 'baoyu_qingwen_death_01', chapter: 4, title: '晴雯之死', scene: 'yihong_yuan', speaker: '旁白', text: '晴雯被撵出去后，没过几天便病死了。消息传来时，宝玉正在读书。他手中的书"啪"的一声掉在地上，整个人僵住了。\n\n"不可能……"他喃喃道，"她那么年轻，那么有活力……怎么可能就这样死了？"\n\n袭人在一旁低声道："二爷，节哀顺变……"宝玉猛然抬头，目光如刀："节哀？你告诉我如何节哀？晴雯是被你们逼死的！是你向太太进言，是太太下令抄检，是你们——一个个所谓的\u201c好人\u201d——联手杀了她！"\n\n袭人脸色惨白，嘴唇颤抖着却说不出一句话。', choices: [{ text: '去祭奠晴雯', next: 'baoyu_qingwen_death_02', effects: { 'attributes.emotion': { add: 5 }, 'flags.mourned_qingwen': true } }, { text: '强忍悲痛', next: 'baoyu_qingwen_death_03', effects: { 'attributes.wisdom': { add: 2 } } }] },
    baoyu_qingwen_death_02: { id: 'baoyu_qingwen_death_02', chapter: 4, title: '芙蓉女儿诔', scene: 'garden_path', speaker: '旁白', text: '宝玉偷偷来到晴雯灵前，献上自己亲手写的祭文——《芙蓉女儿诔》。\n\n"维太平不易之元年，蓉桂竞芳之月，无可奈何之日，怡红院浊玉，谨以群花之蕊、冰鲛之縠、沁芳之泉、枫露之茗，四者虽微，聊以达诚申信，乃致祭于白帝宫中抚司秋艳芙蓉女儿之前曰："\n\n他一字一句地读着这篇诔文，每一个字都浸透着他的泪水与思念。晴雯虽然走了，但她的精神将永远活在这篇文字之中。\n\n"茜纱窗下，我本无缘；黄土垄中，卿何薄命？"\n\n读完最后一句，宝玉将祭文焚烧在灵前。火焰吞噬了纸张，化作青烟袅袅升天——那是晴雯的灵魂，回到了她该去的地方。', choices: [{ text: '返回大观园', next: 'baoyu_ch4_01a', effects: { 'attributes.talent': { add: 3 }, 'attributes.emotion': { add: -2 } } }] },
    baoyu_qingwen_death_03: { id: 'baoyu_qingwen_death_03', chapter: 4, title: '悲痛深藏', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉将晴雯之死的悲痛深深埋进心底。表面上，他依旧过着原来的生活；只有夜深人静时，他会想起那个撕扇的女子，想起那个为他补裘的女子。\n\n"晴雯……"他对着月亮轻声唤道，"你在那边还好吗？"\n\n没有人回答。只有月光洒在他的脸上，如同温柔的手指。\n\n从那天起，宝玉变得更加沉默了。他开始明白：在这个世界上，有些人一旦错过，就永远不再回来。他能做的，就是好好活着，替那些离去的人看看这个世界。', choices: [{ text: '继续前行', next: 'baoyu_ch4_01a', effects: { 'attributes.wisdom': { add: 2 } } }] },

    ldaiyu_tipa_01: { id: 'ldaiyu_tipa_01', chapter: 2, title: '题帕三绝', scene: 'xiaoxiang_guan', speaker: '旁白', text: '那夜之后，宝玉将自己常用的两方旧帕子托人送给黛玉。黛玉收到后，百感交集——这两方帕子，是他贴身所用之物，上面还带着他的体温和气息。\n\n她展开帕子，提笔写下了三首绝句：\n\n其一：眼空蓄泪泪空垂，暗洒闲抛却为谁？尺幅鲛绡劳惠赠，叫人焉得不伤悲？\n\n其二：抛珠滚玉只偷潦，镇日无心镇日闲。枕上袖边犹拭痕，任他点点与斑斑。\n\n其三：彩线难收面上珠，湘江旧迹已模糊。窗前亦有千竿竹，不识香痕渍也无？\n\n三首诗，字字泣血，句句含情。这不仅是诗，更是黛玉用整个灵魂写给宝玉的情书。', choices: [{ text: '将题帕珍藏在怀中', next: 'ldaiyu_tipa_02', effects: { 'attributes.talent': { add: 4 }, 'attributes.emotion': { add: 3 }, 'flags.tipa_poem': true } }, { text: '派人将帕子还给宝玉', next: 'ldaiyu_tipa_02b', effects: { 'attributes.wisdom': { add: 2 } } }] },
    ldaiyu_tipa_02: { id: 'ldaiyu_tipa_02', chapter: 2, title: '帕中情深', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉将题好诗的帕子叠好，贴身收藏。每当夜深人静时，她会将它取出，轻轻摩挲上面的字迹——仿佛这样就能感受到宝玉的温度。\n\n紫鹃有一次问她："姑娘，这帕子对您很重要吗？"黛玉点点头，眼中闪过一丝柔情："这是……我最珍贵的东西。"\n\n紫鹃似懂非懂地点点头。她不知道，这小小的帕子里，藏着两个年轻人全部的爱意与心事。\n\n从此以后，黛玉再也没有离开过这块帕子。无论走到哪里，它都贴在她的胸口——就像宝玉的心，永远陪伴着她。', choices: [{ text: '继续前往命运抉择', next: 'ldaiyu_ch3_01', effects: { 'attributes.emotion': { add: 2 } } }] },
    ldaiyu_tipa_02b: { id: 'ldaiyu_tipa_02b', chapter: 2, title: '矜持退帕', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉犹豫再三，最终还是派紫鹃将帕子送回了怡红院。她对自己说：林黛玉，你要矜持，不能让人看出你的心思。\n\n然而当紫鹃走后，她又后悔了。她望着窗外怡红院的方向，心中涌起一股说不出的失落。\n\n"我是不是……太傻了？"她问自己。\n\n没有人回答。只有窗外的竹叶沙沙作响，仿佛在嘲笑她的矛盾与纠结。', choices: [{ text: '继续前往命运抉择', next: 'ldaiyu_ch3_01', effects: { 'attributes.wisdom': { add: 1 } } }] },

    ldaiyu_zijuan_test_01: { id: 'ldaiyu_zijuan_test_01', chapter: 3, title: '紫鹃试玉', scene: 'xiaoxiang_guan', speaker: '旁白', text: '紫鹃见黛玉身体日渐衰弱，心中焦急。她想试一试宝玉对黛玉的心意究竟有多真，便哄骗宝玉道："姑娘要回苏州家去了！"宝玉听了这话，顿时如五雷轰顶，整个人呆住了。\n\n"你说什么？林妹妹要走？"他的声音颤抖着，"不行！我不许！"\n\n紫鹃见他反应如此激烈，心中既欣慰又难过——欣慰的是宝玉果然真心爱着姑娘，难过的是这两个人的感情之路注定坎坷。\n\n宝玉抓住紫鹃的手，急切地问："她什么时候走？我去求老太太留下她！"', choices: [{ text: '立刻去找贾母', next: 'ldaiyu_zijuan_test_02', effects: { 'relationships.jbaoyu': { add: 10 }, 'attributes.emotion': { add: 5 } } }, { text: '先冷静下来', next: 'ldaiyu_zijuan_test_02b', effects: { 'attributes.wisdom': { add: 2 } } }] },
    ldaiyu_zijuan_test_02: { id: 'ldaiyu_zijuan_test_02', chapter: 3, title: '痴狂寻母', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉疯了一样跑去贾母处，一头撞进她怀里，哭喊道："老太太！林妹妹要走！你不能让她走！"\n\n贾母被他吓了一跳，问道："怎么回事？谁说林丫头要走了？"宝玉指着紫鹃道："是她说的！"紫鹃只好将实情说了出来——原来是骗他的。\n\n贾母又气又笑，骂了紫鹃一顿，又安慰宝玉道："傻孩子，你林妹妹哪里也不去。她这辈子就在这儿陪着你了。"\n\n宝玉这才平静下来，却发现眼前一黑——急火攻心，他竟然晕了过去。\n\n醒来时，他发现自己躺在潇湘馆的床上，黛玉坐在床边，眼中含泪。两人四目相对，千言万语尽在不言中。', choices: [{ text: '握住黛玉的手', next: 'ldaiyu_ch3_01', effects: { 'relationships.ldaiyu': { add: 8 }, 'attributes.emotion': { add: 3 } } }] },
    ldaiyu_zijuan_test_02b: { id: 'ldaiyu_zijuan_test_02b', chapter: 3, title: '冷静应对', scene: 'xiaoxiang_guan', speaker: '旁白', text: '宝玉强迫自己冷静下来。他深吸一口气，问道："紫鹃，你为什么要骗我？"紫鹃流泪道："二爷，我只是想试试……试试您对姑娘的心意。"宝玉沉默良久，轻声道："你不必试。我对林妹妹的心，天地可鉴。"\n\n这时，黛玉从内室走出来，显然听到了他们的对话。她看着宝玉，眼中闪过复杂的情绪——感动、愧疚、还有深深的无奈。\n\n"宝玉……"她轻声唤道，"对不起，让你担心了。"\n\n宝玉摇摇头，走上前去握住她的手："只要你还在，什么都不重要。"', choices: [{ text: '继续前往命运抉择', next: 'ldaiyu_ch3_01', effects: { 'relationships.jbaoyu': { add: 5 } } }] },

    xiangyun_drunk_01: { id: 'xiangyun_drunk_01', chapter: 2, title: '醉卧芍药裀', scene: 'garden_path', speaker: '旁白', text: '那日宝玉寿辰，众姐妹在芍药栏边摆宴为庆。湘云喝多了酒，不胜酒力，竟在一块青石上睡着了。\n\n她睡得极熟，面若桃花，口脂尚存。蜜蜂蝴蝶围着她飞舞，落花铺满了她的身边。远远望去，宛如一幅美人春睡图。\n\n众人悄悄围过来，不忍吵醒她。黛玉轻声道："看这醉态，倒是难得的真趣。"宝钗亦道："湘云妹妹素来豪爽，今日这般娇憨，倒是头一回见。"\n\n宝玉看着熟睡的湘云，心中涌起一股怜惜——这个总是笑呵呵的妹妹，内心又有多少不为人知的苦楚呢？', choices: [{ text: '为湘云盖上衣裳', next: 'xiangyun_drunk_02', effects: { 'relationships.shi_xiangyun': { add: 5 }, 'attributes.charm': { add: 2 } } }, { text: '静静守护', next: 'xiangyun_drunk_02', effects: { 'attributes.emotion': { add: 1 } } }] },
    xiangyun_drunk_02: { id: 'xiangyun_drunk_02', chapter: 2, title: '芍药梦醒', scene: 'garden_path', speaker: '旁白', text: '湘云睡了整整一个时辰才醒来。她迷迷糊糊地睁开眼，发现自己躺在芍药花丛中，身上盖着一件外袍，周围围着一圈人。\n\n"怎么了？发生什么事了？"她揉着眼睛问道。\n\n众人哄堂大笑。黛玉笑道："我们的枕霞旧友，昨夜怕是梦见周公了吧？"湘云这才意识到自己醉酒失态，脸一下子红到了耳根。\n\n"你们……你们不许笑话我！"她佯怒道，却也忍不住跟着笑了。\n\n阳光、花香、笑声——这一刻的大观园，美得不像是人间。', choices: [{ text: '继续游玩', next: 'shi_xiangyun_ch2_01', effects: { 'attributes.emotion': { add: 2 } } }] },

    tanchun_far_01: { id: 'tanchun_far_01', chapter: 4, title: '探春远嫁', scene: 'qiushuang_zhai', speaker: '旁白', text: '贾府日渐衰落，为了维持家业，贾政决定将探春远嫁海疆。探春得知消息后，并没有哭闹，而是平静地接受了这个安排。\n\n"女儿家终究是要嫁人的，"她对宝玉道，"嫁近嫁远，又有什么区别？"\n\n然而当她独自一人时，眼泪还是不争气地流了下来。她想起自己在贾府的这些年——理家的抱负、改革的雄心、想要证明庶出女儿也能有一番作为的梦想……一切都将成为泡影。\n\n"我但凡是个男人……"她再次念着这句话，声音哽咽。', choices: [{ text: '为探春送行', next: 'tanchun_far_02', effects: { 'relationships.tanchun': { add: 8 }, 'attributes.emotion': { add: 3 } } }, { text: '设法帮她留下来', next: 'tanchun_far_02b', conditions: { 'attributes.wisdom': { min: 8 } }, effects: { 'attributes.wisdom': { add: 3 } } }] },
    tanchun_far_02: { id: 'tanchun_far_02', chapter: 4, title: '秋风离别', scene: 'daguan_yuan_gate', speaker: '旁白', text: '探春出嫁那天，秋风萧瑟。贾府上下都来为她送行，却没有人真正理解她心中的苦楚。\n\n临上车前，她拉住宝玉的手，低声道："哥哥，你要好生保重。将来若有机会……记得来看看我。"\n\n宝玉点头，喉咙发紧，说不出话来。\n\n马车缓缓启动，探春的身影渐渐消失在尘土中。宝玉望着那个方向，久久没有动弹——又一个姐妹离开了大观园，这个曾经充满欢声笑语的地方，如今变得越来越空旷了。', choices: [{ text: '返回大观园', next: 'baoyu_ch4_01a', effects: { 'attributes.emotion': { add: -1 } } }] },
    tanchun_far_02b: { id: 'tanchun_far_02b', chapter: 4, title: '力挽狂澜', scene: 'rongguo_hall', speaker: '旁白', text: '宝玉决定想办法帮探春留下来。他去找贾母陈情，又去找贾政说理，甚至提出愿意用自己的婚事来交换探春的留任。\n\n贾母叹道："宝玉，有些事不是你想改变就能改变的。这是家族的决定，也是探春的命运。"\n\n宝玉不甘心，又去找王夫人、找凤姐……然而所有人都告诉他同一件事：探春必须嫁。\n\n最终，他还是失败了。但他至少努力过了——这就够了。探春临走前对他说："谢谢你，哥哥。虽然结果没有改变，但我知道你尽力了。"', choices: [{ text: '目送探春远去', next: 'tanchun_far_02', effects: { 'attributes.wisdom': { add: 2 } } }] },

    cross_midautumn_new_01: { id: 'cross_midautumn_new_01', chapter: 3, title: '凹晶馆联诗', scene: 'garden_path', speaker: '旁白', text: '中秋之夜，黛玉与湘云离席来到凹晶馆边的池畔联句。\n\n"三五中秋夕，清游拟上元。"湘云起句。\n\n"箸占牛斗客，笼虚宿鸟痕。"黛玉接道。\n\n两人越联越长，才情碰撞出最美的火花。直到最后一句——\n\n"寒塘渡鹤影，冷月葬花魂。"\n\n两人同时脱口而出，然后相视而笑，又同时落下泪来。这句诗，何尝不是她们各自的写照？', choices: [{ text: '加入她们的联句', next: 'cross_midautumn_new_02', effects: { 'attributes.talent': { add: 3 } } }, { text: '静静聆听', next: 'cross_midautumn_new_02', effects: { 'attributes.emotion': { add: 2 } } }] },
    cross_midautumn_new_02: { id: 'cross_midautumn_new_02', chapter: 3, title: '月下清谈', scene: 'garden_path', speaker: '旁白', text: '联句结束后，三人坐在池畔的石阶上，望着水中的月亮出神。\n\n黛玉忽然开口道："你们说……这月亮，是不是也在看着我们？"\n\n湘云笑道："当然在看啦！它大概在想：这几个傻丫头，大半夜的不睡觉，跑来这里吟什么诗？"\n\n黛玉也被逗笑了。然而笑声过后，又是一阵沉默。\n\n宝玉望着两位佳人，心中涌起一股难以名状的感觉——这样的时刻，还能持续多久呢？大观园的繁华，就像这水中的月亮一样，美丽却脆弱，随时可能破碎。', choices: [{ text: '返回宴席', next: 'baoyu_ch3_01', effects: { 'attributes.emotion': { add: 1 } } }] },

    cross_birthday_new_01: { id: 'cross_birthday_new_01', chapter: 2, title: '怡红夜宴', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉生日那天，袭人和众丫鬟偷偷在怡红院为他办了一场夜宴。没有长辈在场，没有繁文缛节，只有一群年轻人聚在一起，喝酒、行令、说笑。\n\n黛玉抽到的花签是芙蓉，题着"莫怨东风当自嗟"；宝钗抽到的是牡丹，题着"任是无情也动人"；探春抽到的是杏花，题着"日边红杏倚云栽"……每一支花签，似乎都在预示着她们的命运。\n\n酒酣耳热之际，大家玩起了击鼓传花的游戏。花传到谁手中鼓声停下，谁就要饮酒作诗或表演节目。\n\n那一夜的欢笑声，穿透了怡红院的墙垣，飘荡在大观园的上空。这是他们最无忧无虑的一夜，也是回忆中最美好的一页。', choices: [{ text: '尽情享受这一夜', next: 'cross_birthday_new_02', effects: { 'attributes.emotion': { add: 4 }, 'attributes.charm': { add: 2 } } }] },
    cross_birthday_new_02: { id: 'cross_birthday_new_02', chapter: 2, title: '夜深人静', scene: 'yihong_yuan', speaker: '旁白', text: '夜宴散去后，众人各自回房。宝玉独坐在窗前，回味着今晚的一切。\n\n他想起了黛玉含羞的眼眸，想起了宝钗端庄的微笑，想起了湘云豪爽的笑声，想起了探春坚定的眼神……每一个人，都是如此鲜活，如此美好。\n\n"若能一直这样就好了。"他轻声叹息。\n\n然而他知道，这只是奢望。大观园的繁华终将散去，姐妹们终将各奔前程。而他所能做的，就是在这一切结束之前，好好地记住每一个瞬间。', choices: [{ text: '写完日记后入睡', next: 'baoyu_ch2_01', effects: { 'attributes.talent': { add: 1 } } }] },

    xbaochai_cold_pill_01: { id: 'xbaochai_cold_pill_01', chapter: 2, title: '冷香丸之谜', scene: 'hengwu_yuan', speaker: '旁白', text: '那日宝玉来蘅芜苑看望宝钗，恰好遇到莺儿在配制冷香丸。宝玉好奇地凑过去看，只见那些白色的药丸散发着淡淡的香气。\n\n"这是什么药？"宝玉问道。\n\n莺儿答道："这是冷香丸，专治姑娘的热毒之症。要用春天的白牡丹蕊、夏天的白荷花蕊、秋天的白芙蓉蕊、冬天的白梅花蕊各十二两，再配以雨水之雨、白露之露、霜降之霜、小雪之雪各一钱，方能制成。"\n\n宝玉听得咋舌："这也太难了吧？"\n\n宝钗从内室走出来，淡淡道："难是不难，就是要费些功夫。我这病从小就有，若不吃这药，便会发热咳嗽、心烦意乱。"', choices: [{ text: '询问热毒之症的来历', next: 'xbaochai_cold_pill_02', effects: { 'relationships.xbaochai': { add: 3 } } }, { text: '告辞离开', next: 'xbaochai_ch2_02', effects: {} }] },
    xbaochai_cold_pill_02: { id: 'xbaochai_cold_pill_02', chapter: 2, title: '热毒之源', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗见宝玉追问，沉默片刻后轻声道："这热毒是胎里带来的。癞头和尚说我这是\u201c热毒\u201d，需用冷香压制。可我自己知道……这哪里是什么热毒？不过是被压抑的情感罢了。"\n\n宝玉愣住了——他从没听宝钗说过这样的话。\n\n宝钗继续道："我从小就被教导要做个端庄贤淑的女儿，不能有太多情绪，不能有自己的想法。久而久之，我便真的变成了这样——外人眼中的完美宝钗，其实不过是一具没有灵魂的躯壳罢了。"\n\n她说这话时，眼中闪过一丝从未有过的脆弱。', choices: [{ text: '倾听她的心声', next: 'xbaochai_orig_08', effects: { 'relationships.xbaochai': { add: 5 }, 'attributes.emotion': { add: 2 } } }] },

    xbaochai_orig_08: { id: 'xbaochai_orig_08', chapter: 2, title: '蘅芜夜话', scene: 'hengwu_yuan', speaker: '旁白', text: '那夜宝钗与宝玉谈了很多。她谈起自己对未来的迷茫，谈起对金锁的抗拒，谈起内心深处那个渴望自由的自我。\n\n"你知道吗，"她轻声道，"有时候我很羡慕黛玉。她可以哭、可以笑、可以发脾气、可以使小性子……而我呢？我只能端着、忍着、装着。"\n\n宝玉握住她的手："宝姐姐，你可以做你自己。不需要为任何人活。"\n\n宝钗的眼眶红了。她转过头去，不想让宝玉看到她的眼泪。\n\n"谢谢……"她声音颤抖地说，"谢谢你愿意听我说这些。"\n\n那一夜，两人之间的隔阂消融了许多。他们不再是"金玉良缘"中的两个人，而是彼此倾诉的朋友。', choices: [{ text: '承诺会支持她', next: 'xbaochai_ch2_02', effects: { 'relationships.xbaochai': { add: 4 }, 'attributes.emotion': { add: 2 } } }] },

    miaoyu_stolen_01: { id: 'miaoyu_stolen_01', chapter: 4, title: '妙玉遭劫', scene: 'gufang_bridge', speaker: '旁白', text: '那日一群强盗闯入栊翠庵，将妙玉掳走。这位一生追求洁净的世外仙姝，就此落入尘埃。\n\n宝玉得知消息后，立即组织人手去营救。然而当他赶到时，妙玉已经被带走了——只留下了那只绿玉斗茶杯，孤零零地放在桌上。\n\n他拿起茶杯，上面还残留着余温。恍惚间，他仿佛看到了妙玉清冷的目光，听到了她淡雅的声音……\n\n"欲洁何曾洁，云空未必空。"他喃喃念着她的判词，心中涌起无尽的悲凉。', choices: [{ text: '誓要救出妙玉', next: 'miaoyu_stolen_02', effects: { 'attributes.emotion': { add: 4 }, 'attributes.wisdom': { add: 1 } } }, { text: '无力回天', next: 'miaoyu_stolen_02b', effects: { 'attributes.emotion': { add: -2 } } }] },
    miaoyu_stolen_02: { id: 'miaoyu_stolen_02', chapter: 4, title: '追寻踪迹', scene: 'garden_path', speaker: '旁白', text: '宝玉四处打听妙玉的下落。他动用了所有人脉关系，花了大量银两，终于得到了一条线索——妙玉被带到了江南某处的山寨之中。\n\n他没有丝毫犹豫，立即启程南下。一路上风餐露宿，历经艰险，终于找到了那个山寨。\n\n然而当他冲进寨中时，看到的却是让他心碎的一幕——妙玉已经被逼成了寨主的压寨夫人，整日以泪洗面。\n\n"妙玉……"宝玉的声音颤抖着。\n\n妙玉抬起头，看到宝玉的那一刻，泪水夺眶而出。', choices: [{ text: '带妙玉逃离', next: 'miaoyu_end_01', effects: { 'attributes.emotion': { add: 3 } } }] },
    miaoyu_stolen_02b: { id: 'miaoyu_stolen_02b', chapter: 4, title: '无力回天', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉没有能力去救妙玉。他只能回到大观园，每日望着栊翠庵的方向发呆。\n\n"对不起……"他轻声说道，"是我太无能了。"\n\n袭人劝道："二爷，您已经尽力了。"\n\n"尽力？"宝玉苦笑，"我连自己的晴雯都保不住，何况是妙玉？"\n\n从那天起，宝玉变得更加沉默了。他开始明白：在这个世界上，有些事情不是你努力就能改变的。', choices: [{ text: '继续前行', next: 'baoyu_ch4_01a', effects: { 'attributes.wisdom': { add: 2 } } }] },
    miaoyu_end_01: { id: 'miaoyu_end_01', chapter: 5, title: '槛外余生·终章', scene: 'gufang_bridge', speaker: '旁白', text: '宝玉成功将妙玉从山寨中救了出来。然而经此一劫，妙玉的身体和精神都受到了极大的创伤。\n\n"我不干净了……"她反复念着这句话，"我再也不能回栊翠庵了……"\n\n宝玉将她安置在一处僻静的尼姑庵中，常常去看望她。渐渐地，在她的照料下，妙玉的精神有所好转。\n\n多年后，妙玉重新披上了法衣。她对宝玉道："谢谢你，让我明白了——真正的洁净不在身外，而在心中。"\n\n"气质美如兰，才华阜比仙。"她依旧是那个妙玉，只是眼中多了一份沧桑后的通透。', isEnding: true, poem: "气质美如兰，才华阜比仙。", choices: [] },

    jiamu_falling_01: { id: 'jiamu_falling_01', chapter: 4, title: '贾母归天', scene: 'rongguo_hall', speaker: '旁白', text: '那是一个寒冷的冬日，贾母撒手人寰。这位庇护了大观园众人的老祖宗，终于走到了生命的尽头。\n\n临终前，她拉着宝玉的手，断断续续地说道："我的儿……你要好好的……照顾好……你林妹妹……"\n\n宝玉泣不成声："祖母……您不能走……"\n\n贾母费力地笑了笑："人总有……一天的……你……不要……太伤心……"\n\n她的手缓缓垂落，眼睛永远地闭上了。', choices: [{ text: '处理后事', next: 'jiamu_falling_02', effects: { 'attributes.emotion': { add: -3 }, 'attributes.wisdom': { add: 2 } } }] },
    jiamu_falling_02: { id: 'jiamu_falling_02', chapter: 4, title: '大树倾倒', scene: 'daguan_yuan_gate', speaker: '旁白', text: '贾母去世后，贾府失去了最后的庇护。王夫人开始全面接管家务，凤姐的权力进一步扩大，而大观园中的姐妹们则失去了最重要的靠山。\n\n黛玉的病情急剧恶化——没有了贾母的关照，她在府中的处境变得愈发艰难。\n\n宝钗面临着更大的压力——薛家开始催促金玉良缘的婚事。\n\n湘云不得不频繁往返史家，在大观园的时间越来越少。\n\n探春的远嫁被提前提上了日程。\n\n宝玉望着这座逐渐萧条的园子，心中涌起一股前所未有的恐慌。', choices: [{ text: '面对变局', next: 'baoyu_ch4_01a', effects: { 'attributes.wisdom': { add: 1 } } }] },

    baoyu_dream_final_01: { id: 'baoyu_dream_final_01', chapter: 5, title: '太虚幻境重游', scene: 'yihong_yuan', speaker: '旁白', text: '那夜，宝玉做了一个奇怪的梦。梦中他又来到了太虚幻境，见到了警幻仙子。\n\n"痴儿，"警幻仙子道，"你可还记得我从前给你看的册子？"\n\n宝玉点头："记得。上面画着很多女子的画像，每幅画都配着一首判词。"\n\n"那些判词，如今应验了多少？"警幻仙子问道。\n\n宝玉沉默了。他想起晴雯的死、想起探春的远嫁、想起妙玉的遭遇……每一个人的命运，都与册子上预言的一模一样。\n\n"这就是命吗？"他问道，"所有人的结局，早就注定了？"', choices: [{ text: '询问能否改变命运', next: 'baoyu_dream_final_02', effects: { 'attributes.wisdom': { add: 2 } } }, { text: '接受现实', next: 'baoyu_dream_final_03', effects: { 'attributes.emotion': { add: -1 } } }] },
    baoyu_dream_final_02: { id: 'baoyu_dream_final_02', chapter: 5, title: '逆天改命', scene: 'taixu_huanjing', speaker: '旁白', text: '宝玉问道："有没有办法改变这些命运？"\n\n警幻仙子沉吟片刻，道："命运如江河，虽有定势，亦可分流。若你有足够的决心和力量，或许能改写其中一二。但代价……将是巨大的。"\n\n"什么代价？"\n\n"你可能失去你现在拥有的一切——财富、地位、甚至是……某些重要的人。"\n\n宝玉毫不犹豫地道："我愿意！"\n\n警幻仙子深深地看了他一眼，轻声道："痴儿……你还是和当年一样执着。好吧，我给你一次机会。"', choices: [{ text: '踏上逆命之路', next: 'baoyu_end_05', effects: { 'attributes.wisdom': { add: 5 }, 'attributes.emotion': { add: 3 }, 'flags.defied_destiny': true } }] },
    baoyu_dream_final_03: { id: 'baoyu_dream_final_03', chapter: 5, title: '顺应天道', scene: 'yihong_yuan', speaker: '旁白', text: '宝玉选择了接受现实。他明白了：有些事情不是人力可以改变的，与其徒劳抗争，不如坦然面对。\n\n醒来后，他感到前所未有的平静。那些曾经困扰他的纠结、痛苦、挣扎，似乎都在一夜之间烟消云散了。\n\n"世间万物，皆有定数。"他对自己说，"我能做的，就是珍惜当下，不负此生。"', choices: [{ text: '走向最终的归宿', next: 'baoyu_end_06', effects: { 'attributes.wisdom': { add: 4 } } }] },
    baoyu_end_05: { id: 'baoyu_end_05', chapter: 5, title: '逆天改命·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '宝玉选择了与命运抗争。他利用自己的智慧和勇气，一步步改变了众人的命运轨迹。\n\n他救下了晴雯，让她免于一死；他帮助探春摆脱了远嫁的命运；他成全了宝钗追寻自由的心愿；他甚至找到了让黛玉康复的方法……\n\n然而每一次改变命运，都需要付出巨大的代价。他失去了荣华富贵，失去了家族的庇护，甚至一度险些丧命。\n\n但他从不后悔。\n\n"若能换得所爱之人平安喜乐，纵然粉身碎骨，我也甘之如饴。"', isEnding: true, poem: "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？", choices: [] },
    baoyu_end_06: { id: 'baoyu_end_06', chapter: 5, title: '大彻大悟·终章', scene: 'snow_mountain', speaker: '旁白', text: '宝玉最终选择了出家。在一个大雪纷飞的日子，他脱下了锦衣华服，换上了一袭粗布僧袍，随一僧一道飘然而去。\n\n"假作真时真亦假，无为有处有还无。"\n\n他回头望了一眼贾府的方向，白茫茫大地真干净。那些曾经的繁华、那些爱恨情仇、那些欢笑与泪水……一切都如梦幻泡影，随风而逝。\n\n通灵宝玉被遗落在雪地中，发出幽幽的光芒。它在等待下一个有缘人，开启一段新的故事。', isEnding: true, poem: "假作真时真亦假，无为有处有还无。", choices: [] },

    ldaiyu_deathbed_01: { id: 'ldaiyu_deathbed_01', chapter: 5, title: '黛玉临终', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉的生命即将走到尽头。她躺在床上，气若游丝，却依然保持着那份清高的姿态。\n\n紫鹃守在床边，泪流满面。黛玉艰难地抬起手，擦去她脸上的泪水，轻声道："傻丫头……哭什么呢……我不过是……要先走一步了……"\n\n"姑娘……"紫鹃哽咽道。\n\n黛玉望向窗外——她在等一个人。可是那个人，被关在门外，进不来。\n\n"宝玉……"她轻声呼唤，声音细若蚊蚋，"你好……狠的心……"\n\n最后一句话没能说完，她的手缓缓垂落，眼中的光芒彻底消散。\n\n潇湘馆中的千竿翠竹，在风中发出呜咽般的声响——它们在为这位才华横溢的女子送行。', isEnding: true, poem: "寒塘渡鹤影，冷月葬花魂。", choices: [] },

    ldaiyu_survive_01: { id: 'ldaiyu_survive_01', chapter: 5, title: '黛玉重生', scene: 'xiaoxiang_guan', speaker: '旁白', text: '就在黛玉即将咽气的最后一刻，奇迹发生了——一道柔和的光芒笼罩了她的身体，她的呼吸渐渐平稳，苍白的脸上浮现出一丝血色。\n\n紫鹃惊呆了："姑娘……您……您好了？"\n\n黛玉缓缓睁开眼，茫然地看着四周。她感觉自己好像做了一场很长很长的梦，梦中有人在对她说："绛珠仙子，你的泪已还够，从今往后，为自己而活吧。"\n\n"为自己而活……"她喃喃重复着这句话，眼中闪过一丝从未有过的光芒。\n\n从那天起，黛玉变了。她不再以泪洗面，而是开始学习医术、研习丹青、教授诗文……', choices: [{ text: '开始新的人生', next: 'ldaiyu_end_07', effects: { 'attributes.health': { add: 10 }, 'attributes.talent': { add: 5 }, 'attributes.wisdom': { add: 5 }, 'flags.survived_death': true } }] },
    ldaiyu_end_07: { id: 'ldaiyu_end_07', chapter: 5, title: '凤凰涅槃·终章', scene: 'xiaoxiang_guan', speaker: '旁白', text: '黛玉走出了死亡的阴影，迎来了全新的人生。她在大观园中开设了潇湘书院，教导年轻女子读书识字、吟诗作画。\n\n"质本洁来还洁去，强于污淖陷渠沟。"她常对学生们说，"女子应当自立自强，不依附于人，不屈从于命。"\n\n她的名声渐渐传遍了京城，甚至引来了皇宫的关注。然而她拒绝了所有的功名利禄，只愿做一个平凡的教书先生。\n\n多年后，当人们提起林黛玉时，想到的不再只是一个多愁善感的病美人，而是一位独立自强、才德兼备的女先生。\n\n绛珠仙草终于完成了蜕变——从以泪还恩的可怜仙子，成长为照亮他人的璀璨明灯。', isEnding: true, poem: "质本洁来还洁去，强于污淖陷渠沟。", choices: [] },

    xbaochai_reform_01: { id: 'xbaochai_reform_01', chapter: 4, title: '宝钗改革', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗拒绝了金玉良缘后，开始全身心地投入到薛家生意的经营中。她运用自己的聪明才干，进行了一系列大刀阔斧的改革：裁撤冗员、整顿账目、开拓新市场……\n\n起初，族中长辈对她一个女子插手生意颇有微词。然而当账面上的数字开始节节攀升时，所有的质疑声都消失了。\n\n"宝丫头真是我们薛家的福星啊！"薛姨妈逢人就夸。\n\n宝钗只是淡淡一笑。她知道，这不过是开始而已。她要让所有人看到——女子不仅能持家，更能立业；不仅能在后宅争宠，更能在商海搏击。', choices: [{ text: '扩大经营规模', next: 'xbaochai_end_08', effects: { 'attributes.fortune': { add: 5 }, 'attributes.wisdom': { add: 3 } } }, { text: '稳扎稳打', next: 'xbaochai_end_09', effects: { 'attributes.wisdom': { add: 2 } } }] },
    xbaochai_end_08: { id: 'xbaochai_end_08', chapter: 5, title: '商界传奇·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗成为了京城首屈一指的女商人。她的商铺遍布天下，她的名字成为了一个传奇。\n\n"好风凭借力，送我上青云。"她终于实现了这句诗的含义——只不过凭借的不是婚姻的"东风"，而是自己的才能与努力。\n\n她常对人说："女子当自强。依附于人，不如靠自己双手打拼出一片天。"', isEnding: true, poem: "好风凭借力，送我上青云。", choices: [] },
    xbaochai_end_09: { id: 'xbaochai_end_09', chapter: 5, title: '平淡是真·终章', scene: 'hengwu_yuan', speaker: '旁白', text: '宝钗选择了稳扎稳打的经营策略。虽然没有大富大贵，但也衣食无忧。她将大部分时间用于读书、写字、教导晚辈。\n\n"淡极始知花更艳，愁多焉得玉无痕。"她终于体会到了这首诗的真谛——真正的幸福不在于轰轰烈烈，而在于内心的平静与满足。', isEnding: true, poem: "淡极始知花更艳，愁多焉得玉无痕。", choices: [] },

    shi_xiangyun_end_01: { id: 'shi_xiangyun_end_01', chapter: 5, title: '湘云自立·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '史湘云最终摆脱了史家的束缚，开始了自己的生活。她凭借着豪爽的性格和过人的才干，在京城开了一家酒馆。\n\n"惟大英雄能本色，是真名士自风流。"这是她的座右铭。\n\n酒馆生意红火，湘云每天都笑呵呵地招呼客人。她用自己的方式证明：女子不一定非要嫁人才能幸福，独立自主同样可以活得精彩。', isEnding: true, poem: "惟大英雄能本色，是真名士自风流。", choices: [] },

    tanchun_return_01: { id: 'tanchun_return_01', chapter: 5, title: '探春归来', scene: 'qiushuang_zhai', speaker: '旁白', text: '多年后，探春终于得以重返中原。她已经不再是当初那个需要远嫁他乡的庶出女儿，而是一位见过世面、经过历练的女性。\n\n"我但凡是个男人，必能立一番事业。"她当年的豪言壮语，如今终于实现了一半——虽然是女儿身，她也确实做出了属于自己的事业。\n\n她回到大观园的废墟前，望着那些残垣断壁，心中百感交集。', choices: [{ text: '重建大观园', next: 'tanchun_end_10', effects: { 'attributes.wisdom': { add: 3 } } }, { text: '另辟蹊径', next: 'tanchun_end_11', effects: { 'attributes.talent': { add: 2 } } }] },
    tanchun_end_10: { id: 'tanchun_end_10', chapter: 5, title: '再造大观·终章', scene: 'daguan_yuan_gate', speaker: '旁白', text: '探春利用自己的积蓄和人脉，开始重建大观园。她不仅要恢复往日的繁华，更要将其改造为一个真正属于女子的乐园——这里有书院、有工坊、有茶园……女子们可以在这里学习、工作、生活，不再依赖任何人。\n\n"蕉下客终于找到了属于自己的土地。"她望着焕然一新的大观园，满意地笑了。', isEnding: true, poem: "才自精明志自高，生于末世运偏消。", choices: [] },
    tanchun_end_11: { id: 'tanchun_end_11', chapter: 5, title: '开辟新路·终章', scene: 'qiushuang_zhai', speaker: '旁白', text: '探春选择另辟蹊径。她没有重建大观园，而是在京城创办了一所女子学堂，专门教导贫寒人家的女儿读书识字。\n\n"我深知庶出的苦楚，"她对学生们说，"所以我希望你们都能通过知识改变命运，不再受人歧视。"\n\n学堂越办越大，培养出了无数优秀的女子。探春用自己的方式证明了：出身不代表一切，只要有志气、有能力，任何人都可以创造属于自己的辉煌。', isEnding: true, poem: "才自精明志自高，生于末世运偏消。", choices: [] },

    wangxifeng_end_01: { id: 'wangxifeng_end_01', chapter: 5, title: '熙凤落幕·终章', scene: 'rongguo_hall', speaker: '旁白', text: '贾府败落后，凤姐的身子也垮了。她躺在病榻上，回想自己的一生——协理宁国府的风光、弄权铁槛寺的得意、逼迫尤二姐的残忍……\n\n"机关算尽太聪明，反误了卿卿性命。"她喃喃念着自己的判词，眼中满是悔意。\n\n若有来世，她希望自己能做一个简单的人——不用算计、不用争斗、不用伤害别人……只愿平平淡淡地过日子。\n\n然而人生没有如果。她闭上眼睛，带着无尽的遗憾，离开了这个世界。', isEnding: true, poem: "机关算尽太聪明，反误了卿卿性命。", choices: [] },

    qingwen_end_01: { id: 'qingwen_end_01', chapter: 4, title: '晴雯归天·终章', scene: 'yihong_yuan', speaker: '旁白', text: '晴雯死后，魂魄来到了太虚幻境。警幻仙子问她："你这一生，可有遗憾？"\n\n晴雯想了想，道："有。我遗憾没能亲眼看到二爷成家立业，遗憾没能继续伺候他……但我不后悔我爱过他、为他付出过一切。"\n\n警幻仙子点头道："你虽身为下贱，心比天高。这份真情，足以让你位列仙班。"\n\n于是晴雯成为了芙蓉花神，每当秋天来临，她便会在大观园中重现，用她的笑容温暖每一个路过的人。', isEnding: true, poem: "霁月难逢，彩云易散。心比天高，身为下贱。", choices: [] },

    xiren_end_01: { id: 'xiren_end_01', chapter: 5, title: '袭人嫁人·终章', scene: 'yihong_yuan', speaker: '旁白', text: '贾府败落后，袭人嫁给了蒋玉菡。婚礼简单而温馨，没有大操大办，只有几个亲近的人参加。\n\n"花气袭人知骤暖，鹊声穿树喜新晴。"她终于找到了属于自己的幸福。\n\n偶尔，她还是会想起大观园中的那些日子，想起宝玉、想起晴雯、想起那些已经散落的姐妹们。然而她不再愧疚——每个人都有自己的路要走，她选择了自己的，也尊重别人的。\n\n蒋玉菡对她很好，日子过得平淡而充实。这或许就是最好的结局了吧。', isEnding: true, poem: "花气袭人知骤暖，鹊声穿树喜新晴。", choices: [] },

    cross_family_fall_01: { id: 'cross_family_fall_01', chapter: 5, title: '贾府抄家', scene: 'rongguo_hall', speaker: '旁白', text: '那一天终于来了——圣旨下达，贾府被抄。官兵涌入荣宁二府，查封财产、逮捕人口、贴封条……昔日钟鸣鼎食之家，顷刻间土崩瓦解。\n\n宝玉站在大观园门口，看着那些熟悉的建筑被贴上封条，心中五味杂陈。这里是他的家，是他长大的地方，是他与姐妹们共同度过美好时光的地方……如今，一切都结束了。\n\n"乱烘烘你方唱罢我登场，反认他乡是故乡。甚荒唐，到头来都是为他人作嫁衣裳！"', choices: [{ text: '面对现实', next: 'cross_family_fall_02', effects: { 'attributes.wisdom': { add: 3 }, 'attributes.fortune': { add: -5 } } }] },
    cross_family_fall_02: { id: 'cross_family_fall_02', chapter: 5, title: '树倒猢狲散', scene: 'daguan_yuan_gate', speaker: '旁白', text: '抄家之后，贾府众人各奔前程。有的被发配边疆，有的沦落街头，有的投奔亲戚……曾经热闹非凡的大家庭，转眼间分崩离析。\n\n宝玉带着一点点盘缠，独自踏上了未知的旅程。他不知道前方等待他的是什么，但他知道——无论多么艰难，他都要活下去。\n\n因为他答应了贾母，答应了自己，答应了那些已经离去的人：要好好地活着。\n\n大观园的废墟在身后越来越远，而新的生活，正在前方等待着他。', choices: [{ text: '走向未来', next: 'baoyu_end_06', effects: { 'attributes.wisdom': { add: 2 } } }] }
};
