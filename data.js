const data = [
  {
    "id": 801,
    "word": "nowadays",
    "choices": [
      "徐々に",
      "同様に",
      "この頃",
      "近頃"
    ],
    "correct": 2,
    "sentence": "Nowadays, I usually spend my time reading and sleeping.",
    "jp": "最近は本を読んだり，寝たりして過ごすことが多い。"
  },
  {
    "id": 802,
    "word": "lately",
    "choices": [
      "本当に",
      "まったく",
      "近頃",
      "さらに"
    ],
    "correct": 2,
    "sentence": "Lately I’ve been feeling very tired.",
    "jp": "最近，私はとても疲れを感じている。"
  },
  {
    "id": 803,
    "word": "architecture",
    "choices": [
      "しっぽ",
      "見知らぬ人",
      "境界線",
      "建築"
    ],
    "correct": 3,
    "sentence": "The architecture of London is a mix of many different styles.",
    "jp": "ロンドンの建築はさまざまなスタイルが混在している。"
  },
  {
    "id": 804,
    "word": "complicated",
    "choices": [
      "複雑な",
      "感情的な",
      "予測できない",
      "前の"
    ],
    "correct": 0,
    "sentence": "It is a really complicated problem that will take a long time to solve.",
    "jp": "それは解決には長い時間がかかる，本当に複雑な問題だ。"
  },
  {
    "id": 805,
    "word": "facility",
    "choices": [
      "化粧",
      "施設",
      "棒",
      "国境"
    ],
    "correct": 1,
    "sentence": "Our university has great facilities for the students to use.",
    "jp": "私たちの大学には学生が利用できる素晴らしい施設がある。"
  },
  {
    "id": 806,
    "word": "locate",
    "choices": [
      "解釈する",
      "調整する",
      "扱う",
      "位置する"
    ],
    "correct": 3,
    "sentence": "The tower is located in the central part of the city.",
    "jp": "その塔は街の中心部に位置している。"
  },
  {
    "id": 807,
    "word": "bar",
    "choices": [
      "法廷",
      "連続物",
      "予測",
      "棒"
    ],
    "correct": 3,
    "sentence": "This application is able to read bar codes.",
    "jp": "このアプリケーションはバーコードを読み取ることができます。"
  },
  {
    "id": 808,
    "word": "guest",
    "choices": [
      "表現",
      "冒険",
      "外国人",
      "客"
    ],
    "correct": 3,
    "sentence": "Hotel guests are welcome to use the pool at any time.",
    "jp": "ホテルの宿泊客はいつでもプールを利用できる。"
  },
  {
    "id": 809,
    "word": "strategy",
    "choices": [
      "版",
      "株式",
      "議会",
      "戦略"
    ],
    "correct": 3,
    "sentence": "We need to develop a clear strategy to make this company successful.",
    "jp": "この会社を成功させるためには，明確な戦略を立てる必要がある。"
  },
  {
    "id": 810,
    "word": "acquire",
    "choices": [
      "反応する",
      "高める",
      "習得する",
      "延長する"
    ],
    "correct": 2,
    "sentence": "He acquired his skills in English by living in New York for a year.",
    "jp": "彼は1年間ニューヨークに住んで英語の技能を習得した。"
  },
  {
    "id": 811,
    "word": "truly",
    "choices": [
      "本当に",
      "まったく",
      "徐々に",
      "さらに"
    ],
    "correct": 0,
    "sentence": "I truly think that we should move house.",
    "jp": "私は本当に引っ越すべきだと思う。"
  },
  {
    "id": 812,
    "word": "eliminate",
    "choices": [
      "抑える",
      "扱う",
      "値する",
      "取り除く"
    ],
    "correct": 3,
    "sentence": "The agency's aim is to eliminate all corruption in government.",
    "jp": "その機関の目的はすべての政府の腐敗を取り除くことだ。"
  },
  {
    "id": 813,
    "word": "react",
    "choices": [
      "反応する",
      "押し上げる",
      "捕らえる",
      "繰り返す"
    ],
    "correct": 0,
    "sentence": "He often says strange things just to see how people react.",
    "jp": "彼は人がどう反応するかを見るためだけによく奇妙なことを言う。"
  },
  {
    "id": 814,
    "word": "adjust",
    "choices": [
      "解釈する",
      "笑う",
      "調整する",
      "翻訳する"
    ],
    "correct": 2,
    "sentence": "We adjusted the lighting so that we could see the screen more clearly.",
    "jp": "私たちはスクリーンがよりはっきり見えるように照明を調整した。"
  },
  {
    "id": 815,
    "word": "monopoly",
    "choices": [
      "棒",
      "殺人",
      "独占",
      "契約"
    ],
    "correct": 2,
    "sentence": "The company has a monopoly on selling tobacco in the state.",
    "jp": "その会社は州内でタバコの販売を独占している。"
  },
  {
    "id": 816,
    "word": "exhaust",
    "choices": [
      "疲れ果てさせる",
      "習得する",
      "落胆させる",
      "区別する"
    ],
    "correct": 0,
    "sentence": "After shopping all day, I felt completely exhausted.",
    "jp": "一日中買い物をして，すっかり疲れてしまった。"
  },
  {
    "id": 817,
    "word": "capture",
    "choices": [
      "捕らえる",
      "位置する",
      "延長する",
      "失望させる"
    ],
    "correct": 0,
    "sentence": "They managed to capture the bear that was loose in the city.",
    "jp": "彼らは街に放たれていた熊を何とか捕まえることができた。"
  },
  {
    "id": 818,
    "word": "handle",
    "choices": [
      "ささげる",
      "扱う",
      "高める",
      "値する"
    ],
    "correct": 1,
    "sentence": "The police handled the situation very well and nobody was hurt.",
    "jp": "警察はその状況を非常にうまく処理し，誰もけがをしなかった。"
  },
  {
    "id": 819,
    "word": "furthermore",
    "choices": [
      "近頃",
      "同様に",
      "まったく",
      "さらに"
    ],
    "correct": 3,
    "sentence": "Furthermore, this plan costs a lot of money.",
    "jp": "さらに，この計画には多額のお金がかかる。"
  },
  {
    "id": 820,
    "word": "tail",
    "choices": [
      "外国人",
      "しっぽ",
      "冒険",
      "国境"
    ],
    "correct": 1,
    "sentence": "The dog ran around in circles trying to catch its tail.",
    "jp": "犬は自分のしっぽを捕まえようとぐるぐる走り回った。"
  },
  {
    "id": 821,
    "word": "capital",
    "choices": [
      "運命",
      "資本",
      "知恵",
      "基礎"
    ],
    "correct": 1,
    "sentence": "We need some extra capital to start up the new project.",
    "jp": "新しいプロジェクトを立ち上げるために，余剰資金が必要なんだ。"
  },
  {
    "id": 822,
    "word": "stock",
    "choices": [
      "条約",
      "不況",
      "株式",
      "物質"
    ],
    "correct": 2,
    "sentence": "He buys and sells stocks on the Japanese market.",
    "jp": "彼は日本の市場で株を売買している。"
  },
  {
    "id": 823,
    "word": "whenever",
    "choices": [
      "本当に",
      "どこでも",
      "この頃",
      "〜するときはいつでも"
    ],
    "correct": 3,
    "sentence": "Whenever you come, you will find my room clean.",
    "jp": "いつ来ても私の部屋はきれいですよ。"
  },
  {
    "id": 824,
    "word": "wherever",
    "choices": [
      "本当に",
      "どこでも",
      "この頃",
      "まったく"
    ],
    "correct": 1,
    "sentence": "We can go wherever you would like to go.",
    "jp": "あなたが行きたいところならどこへでも行きますよ。"
  },
  {
    "id": 825,
    "word": "relative",
    "choices": [
      "珍しい",
      "気前のよい",
      "頼りにならない",
      "相対的な"
    ],
    "correct": 3,
    "sentence": "All of my father's relatives came to the party.",
    "jp": "父の親戚はみんなパーティーに来た。"
  },
  {
    "id": 826,
    "word": "graduation",
    "choices": [
      "ことわざ",
      "卒業",
      "学問分野",
      "施設"
    ],
    "correct": 1,
    "sentence": "After graduation I am going to work for a bank.",
    "jp": "私は卒業後，銀行に就職する。"
  },
  {
    "id": 827,
    "word": "absolutely",
    "choices": [
      "同様に",
      "近頃",
      "徐々に",
      "まったく"
    ],
    "correct": 3,
    "sentence": "The concert was absolutely fantastic.",
    "jp": "コンサートは本当に素晴らしかった。"
  },
  {
    "id": 828,
    "word": "disappoint",
    "choices": [
      "失望させる",
      "調整する",
      "高める",
      "取り除く"
    ],
    "correct": 0,
    "sentence": "I was disappointed that you could not come to the party.",
    "jp": "私はあなたがパーティーに来られなかったことにがっかりした。"
  },
  {
    "id": 829,
    "word": "recession",
    "choices": [
      "老化",
      "境界線",
      "不況",
      "正義"
    ],
    "correct": 2,
    "sentence": "The country is entering a recession due to low spending by the people.",
    "jp": "この国は人々の消費が少ないため，不景気に差し掛かっている。"
  },
  {
    "id": 830,
    "word": "suppress",
    "choices": [
      "抑える",
      "延長する",
      "値する",
      "翻訳する"
    ],
    "correct": 0,
    "sentence": "The government tried to suppress the report of the scandal.",
    "jp": "政府はそのスキャンダルに関する報道を抑えようとした。"
  },
  {
    "id": 831,
    "word": "saying",
    "choices": [
      "契約",
      "議会",
      "株式",
      "ことわざ"
    ],
    "correct": 3,
    "sentence": "As the saying goes, he has the best of both worlds.",
    "jp": "ことわざにもあるように，彼は両方のいいとこ取りしている。"
  },
  {
    "id": 832,
    "word": "translate",
    "choices": [
      "疲れ果てさせる",
      "繰り返す",
      "翻訳する",
      "ささげる"
    ],
    "correct": 2,
    "sentence": "Her job is to translate newspaper articles from Japanese into English.",
    "jp": "彼女の仕事は新聞記事を日本語から英語に翻訳することだ。"
  },
  {
    "id": 833,
    "word": "interpret",
    "choices": [
      "捕らえる",
      "区別する",
      "位置する",
      "解釈する"
    ],
    "correct": 3,
    "sentence": "It is difficult to accurately interpret the results of the experiment.",
    "jp": "その実験の結果を正確に解釈するのは難しい。"
  },
  {
    "id": 834,
    "word": "laugh",
    "choices": [
      "押し上げる",
      "調整する",
      "笑う",
      "反応する"
    ],
    "correct": 2,
    "sentence": "He always makes people laugh with his funny stories.",
    "jp": "彼はいつもおもしろい話で人々を笑わせる。"
  },
  {
    "id": 835,
    "word": "gentle",
    "choices": [
      "優しい",
      "前の",
      "致命的な",
      "教育の"
    ],
    "correct": 0,
    "sentence": "Be gentle with the dog as it is only a puppy.",
    "jp": "まだ子犬だから優しくしてね。"
  },
  {
    "id": 836,
    "word": "steep",
    "choices": [
      "急な",
      "気前のよい",
      "異質な",
      "相対的な"
    ],
    "correct": 0,
    "sentence": "It was a steep climb to reach the top of the mountain.",
    "jp": "山の頂上までは急な上り坂だった。"
  },
  {
    "id": 837,
    "word": "polite",
    "choices": [
      "不安定な",
      "頼りにならない",
      "複雑な",
      "礼儀正しい"
    ],
    "correct": 3,
    "sentence": "He is always so polite to elderly people.",
    "jp": "彼はいつも年配の人にとても礼儀正しい。"
  },
  {
    "id": 838,
    "word": "generous",
    "choices": [
      "壮大な",
      "ばかげた",
      "気前のよい",
      "予測できない"
    ],
    "correct": 2,
    "sentence": "He was very generous and gave a lot of money to charity.",
    "jp": "彼はとても気前がよく，たくさんのお金を慈善事業に寄付した。"
  },
  {
    "id": 839,
    "word": "unusual",
    "choices": [
      "関連する",
      "珍しい",
      "罪悪感のある",
      "見える"
    ],
    "correct": 1,
    "sentence": "It is not unusual for her to be late.",
    "jp": "彼女が遅刻するのは珍しいことではない。"
  },
  {
    "id": 840,
    "word": "foreigner",
    "choices": [
      "戦略",
      "連続物",
      "福祉",
      "外国人"
    ],
    "correct": 3,
    "sentence": "There are so many foreigners in Tokyo now.",
    "jp": "今，東京にはたくさんの外国人がいる。"
  },
  {
    "id": 841,
    "word": "border",
    "choices": [
      "国境",
      "議会",
      "しっぽ",
      "ことわざ"
    ],
    "correct": 0,
    "sentence": "The river marks the border between the two countries.",
    "jp": "その川は両国の国境を示している。"
  },
  {
    "id": 842,
    "word": "boundary",
    "choices": [
      "見込み",
      "境界線",
      "客",
      "契約"
    ],
    "correct": 1,
    "sentence": "The Internet enables us to communicate across national boundaries.",
    "jp": "インターネットは国境を越えた交流を可能にする。"
  },
  {
    "id": 843,
    "word": "grand",
    "choices": [
      "壮大な",
      "頼りにならない",
      "何気ない",
      "礼儀正しい"
    ],
    "correct": 0,
    "sentence": "It was a grand event and many people took part in it.",
    "jp": "それは壮大なイベントで，多くの人々が参加した。"
  },
  {
    "id": 844,
    "word": "stranger",
    "choices": [
      "順序",
      "法廷",
      "見知らぬ人",
      "法律"
    ],
    "correct": 2,
    "sentence": "I'm a stranger here, so I don't know where the nearest station is.",
    "jp": "私はここは不慣れなので，最寄りの駅がどこか知らない。"
  },
  {
    "id": 845,
    "word": "alien",
    "choices": [
      "奇妙な",
      "異質な",
      "相対的な",
      "複雑な"
    ],
    "correct": 1,
    "sentence": "This idea seems alien to us.",
    "jp": "この考えは私たちにとって異質に思える。"
  },
  {
    "id": 846,
    "word": "casual",
    "choices": [
      "急な",
      "致命的な",
      "何気ない",
      "優しい"
    ],
    "correct": 2,
    "sentence": "We went for a casual walk along the river.",
    "jp": "私たちは川沿いを気楽に散歩した。"
  },
  {
    "id": 847,
    "word": "ridiculous",
    "choices": [
      "珍しい",
      "ばかげた",
      "感情的な",
      "不安定な"
    ],
    "correct": 1,
    "sentence": "Spending a year relaxing before college is a ridiculous idea.",
    "jp": "大学入学前の1年間をのんびり過ごすなんてばかげた考えだ。"
  },
  {
    "id": 848,
    "word": "axis",
    "choices": [
      "版",
      "軸",
      "一生",
      "独占"
    ],
    "correct": 1,
    "sentence": "The world spins on its axis.",
    "jp": "世界は地軸に基づいて回転している。"
  },
  {
    "id": 849,
    "word": "legislation",
    "choices": [
      "議会",
      "窃盗",
      "法律",
      "正義"
    ],
    "correct": 2,
    "sentence": "The Diet has passed new legislation to reduce the use of oil.",
    "jp": "国会は石油の使用を減らすための新しい法律を可決した。"
  },
  {
    "id": 850,
    "word": "council",
    "choices": [
      "自信",
      "戦略",
      "文明",
      "議会"
    ],
    "correct": 3,
    "sentence": "The city council has decided to build a new library.",
    "jp": "市議会は新しい図書館の建設を決定した。"
  },
  {
    "id": 851,
    "word": "parliament",
    "choices": [
      "見知らぬ人",
      "しっぽ",
      "議会",
      "予測"
    ],
    "correct": 2,
    "sentence": "I watched Parliament discuss the economy on television.",
    "jp": "私はテレビで国会が経済について議論するのを見た。"
  },
  {
    "id": 852,
    "word": "justice",
    "choices": [
      "表現",
      "資本",
      "正義",
      "犯罪者"
    ],
    "correct": 2,
    "sentence": "The justice system of the country is not working.",
    "jp": "この国の司法制度は機能していない。"
  },
  {
    "id": 853,
    "word": "contract",
    "choices": [
      "社会基盤",
      "契約",
      "10代の若者",
      "化粧"
    ],
    "correct": 1,
    "sentence": "We finally signed the contract for our new house.",
    "jp": "私たちはついに新居の契約書にサインした。"
  },
  {
    "id": 854,
    "word": "treaty",
    "choices": [
      "福祉",
      "条約",
      "順序",
      "一生"
    ],
    "correct": 1,
    "sentence": "The two countries finally agreed and signed a peace treaty.",
    "jp": "両国は最終的に合意し，平和条約に調印した。"
  },
  {
    "id": 855,
    "word": "court",
    "choices": [
      "独占",
      "客",
      "ことわざ",
      "法廷"
    ],
    "correct": 3,
    "sentence": "The court decided that the president had stolen the money.",
    "jp": "裁判所は社長がお金を盗んだと結論づけた。"
  },
  {
    "id": 856,
    "word": "criminal",
    "choices": [
      "犯罪者",
      "見込み",
      "境界線",
      "国境"
    ],
    "correct": 0,
    "sentence": "The police chased the criminal after he escaped from the station.",
    "jp": "警察は犯罪者が駅から逃走したあと追いかけた。"
  },
  {
    "id": 857,
    "word": "guilty",
    "choices": [
      "異質な",
      "罪悪感のある",
      "珍しい",
      "見える"
    ],
    "correct": 1,
    "sentence": "I felt guilty buying the cake as I was on a diet.",
    "jp": "ダイエット中だったので，ケーキを買うことに罪悪感を感じた。"
  },
  {
    "id": 858,
    "word": "theft",
    "choices": [
      "棒",
      "議会",
      "窃盗",
      "版"
    ],
    "correct": 2,
    "sentence": "The lady was so angry at the theft of her mobile phone.",
    "jp": "その女性は携帯電話を盗まれたことにとても怒っていた。"
  },
  {
    "id": 859,
    "word": "murder",
    "choices": [
      "資本",
      "軸",
      "殺人",
      "物質"
    ],
    "correct": 2,
    "sentence": "The man was arrested for murder five years later.",
    "jp": "その男は5年後に殺人で逮捕された。"
  },
  {
    "id": 860,
    "word": "unreliable",
    "choices": [
      "感情的な",
      "相対的な",
      "複雑な",
      "頼りにならない"
    ],
    "correct": 3,
    "sentence": "Don't ask him to do it as he is really unreliable.",
    "jp": "彼は本当に信頼できないので，彼にその件を頼まないでください。"
  },
  {
    "id": 861,
    "word": "unstable",
    "choices": [
      "優しい",
      "不安定な",
      "何気ない",
      "奇妙な"
    ],
    "correct": 1,
    "sentence": "The mixture was rather unstable and suddenly exploded.",
    "jp": "その混合物はかなり不安定で，突然爆発した。"
  },
  {
    "id": 862,
    "word": "unpredictable",
    "choices": [
      "ばかげた",
      "気前のよい",
      "急な",
      "予測できない"
    ],
    "correct": 3,
    "sentence": "The weather in the UK is so unpredictable.",
    "jp": "イギリスの天気は非常に予測できない。"
  },
  {
    "id": 863,
    "word": "confidence",
    "choices": [
      "正義",
      "自信",
      "株式",
      "順序"
    ],
    "correct": 1,
    "sentence": "He has no confidence in himself.",
    "jp": "彼は自分にまったく自信がない。"
  },
  {
    "id": 864,
    "word": "odd",
    "choices": [
      "異質な",
      "壮大な",
      "奇妙な",
      "関連する"
    ],
    "correct": 2,
    "sentence": "This weather is really odd as it is snowing in May.",
    "jp": "5月に雪が降るなんて，この天気は本当に奇妙だ。"
  },
  {
    "id": 865,
    "word": "fate",
    "choices": [
      "版",
      "運命",
      "仮説",
      "法廷"
    ],
    "correct": 1,
    "sentence": "It was fate that brought us together.",
    "jp": "私たちを引き合わせたのは運命だった。"
  },
  {
    "id": 866,
    "word": "fatal",
    "choices": [
      "相対的な",
      "見える",
      "致命的な",
      "複雑な"
    ],
    "correct": 2,
    "sentence": "There was a fatal accident on the motorway and three people were killed.",
    "jp": "高速道路で死亡事故があり，3人が亡くなった。"
  },
  {
    "id": 867,
    "word": "visible",
    "choices": [
      "罪悪感のある",
      "頼りにならない",
      "見える",
      "感情的な"
    ],
    "correct": 2,
    "sentence": "The star is visible to the naked eye.",
    "jp": "その星は肉眼にも見える。"
  },
  {
    "id": 868,
    "word": "series",
    "choices": [
      "犯罪者",
      "国境",
      "連続物",
      "知恵"
    ],
    "correct": 2,
    "sentence": "He held a series of lectures on the history of the Edo period.",
    "jp": "彼は江戸時代の歴史について一連の講義を行った。"
  },
  {
    "id": 869,
    "word": "sequence",
    "choices": [
      "窃盗",
      "化粧",
      "順序",
      "老化"
    ],
    "correct": 2,
    "sentence": "What is the next number in this sequence; 1, 3, 5 ...?",
    "jp": "1，3，5…，この順番の次の数字は何でしょうか。"
  },
  {
    "id": 870,
    "word": "version",
    "choices": [
      "棒",
      "法律",
      "ことわざ",
      "版"
    ],
    "correct": 3,
    "sentence": "She compared the original Japanese text with the English version.",
    "jp": "彼女は日本語の原文と英語版を比較した。"
  },
  {
    "id": 871,
    "word": "makeup",
    "choices": [
      "殺人",
      "学問分野",
      "運命",
      "化粧"
    ],
    "correct": 3,
    "sentence": "She wore a mask because she wasn't wearing any makeup.",
    "jp": "彼女は化粧をまったくしていなかったのでマスクをしていた。"
  },
  {
    "id": 872,
    "word": "wisdom",
    "choices": [
      "正義",
      "基礎",
      "客",
      "知恵"
    ],
    "correct": 3,
    "sentence": "Elderly people are believed to have more wisdom.",
    "jp": "高齢者はより多くの知恵をもっていると信じられている。"
  },
  {
    "id": 873,
    "word": "likelihood",
    "choices": [
      "見込み",
      "見知らぬ人",
      "戦略",
      "議会"
    ],
    "correct": 0,
    "sentence": "In all likelihood, I shall attend the meeting.",
    "jp": "あらゆる可能性を考慮して〔どう考えても〕，私は会議に出席します。"
  },
  {
    "id": 874,
    "word": "likewise",
    "choices": [
      "同様に",
      "徐々に",
      "本当に",
      "この頃"
    ],
    "correct": 0,
    "sentence": "I am going to wear a coat and you should do likewise.",
    "jp": "私はコートを着るつもりだが，君も同様にすべきだ。"
  },
  {
    "id": 875,
    "word": "deserve",
    "choices": [
      "笑う",
      "抑える",
      "値する",
      "翻訳する"
    ],
    "correct": 2,
    "sentence": "He deserves the prize.",
    "jp": "彼はその賞に値する。"
  },
  {
    "id": 876,
    "word": "emotional",
    "choices": [
      "教育の",
      "感情的な",
      "頼りにならない",
      "気前のよい"
    ],
    "correct": 1,
    "sentence": "She became quite emotional when she heard that she had won the prize.",
    "jp": "受賞の知らせを聞いた時，彼女はとても感情的になった。"
  },
  {
    "id": 877,
    "word": "expression",
    "choices": [
      "表現",
      "窃盗",
      "犯罪者",
      "軸"
    ],
    "correct": 0,
    "sentence": "His expression was one of total confusion.",
    "jp": "彼の表情は困惑に満ちたものだった。"
  },
  {
    "id": 878,
    "word": "welfare",
    "choices": [
      "10代の若者",
      "福祉",
      "学問分野",
      "境界線"
    ],
    "correct": 1,
    "sentence": "We were worried about the welfare of the children.",
    "jp": "私たちは子供たちの幸福を心配していた。"
  },
  {
    "id": 879,
    "word": "extend",
    "choices": [
      "取り除く",
      "失望させる",
      "延長する",
      "調整する"
    ],
    "correct": 2,
    "sentence": "I am going to extend the length of time I will spend in Japan.",
    "jp": "日本での滞在期間を延長するつもりだ。"
  },
  {
    "id": 880,
    "word": "repeat",
    "choices": [
      "疲れ果てさせる",
      "捕らえる",
      "繰り返す",
      "押し上げる"
    ],
    "correct": 2,
    "sentence": "She kept repeating the exercise until she became perfect.",
    "jp": "彼女は完璧になるまで練習をずっと繰り返した。"
  },
  {
    "id": 881,
    "word": "dedicate",
    "choices": [
      "笑う",
      "扱う",
      "位置する",
      "ささげる"
    ],
    "correct": 3,
    "sentence": "He dedicated his life to medicine.",
    "jp": "彼は自分の人生を医学にささげた。"
  },
  {
    "id": 882,
    "word": "civilization",
    "choices": [
      "外国人",
      "文明",
      "冒険",
      "運命"
    ],
    "correct": 1,
    "sentence": "I find the buildings of the ancient Egyptian civilization really amazing.",
    "jp": "古代エジプト文明の建造物は本当に素晴らしいと思う。"
  },
  {
    "id": 883,
    "word": "educational",
    "choices": [
      "礼儀正しい",
      "複雑な",
      "教育の",
      "急な"
    ],
    "correct": 2,
    "sentence": "These films are for educational purposes.",
    "jp": "これらの映画は教育的な目的のものです。"
  },
  {
    "id": 884,
    "word": "discipline",
    "choices": [
      "版",
      "客",
      "学問分野",
      "表現"
    ],
    "correct": 2,
    "sentence": "Many sports require a strict discipline from the players.",
    "jp": "多くのスポーツは選手に厳しい規律を要求する。"
  },
  {
    "id": 885,
    "word": "gradually",
    "choices": [
      "徐々に",
      "近頃",
      "さらに",
      "本当に"
    ],
    "correct": 0,
    "sentence": "I gradually got better at playing the violin.",
    "jp": "私は次第にバイオリンが上手になった。"
  },
  {
    "id": 886,
    "word": "teenager",
    "choices": [
      "10代の若者",
      "化粧",
      "社会基盤",
      "ことわざ"
    ],
    "correct": 0,
    "sentence": "This animation is especially popular among teenagers.",
    "jp": "このアニメは特にティーンエイジャーの間で人気がある。"
  },
  {
    "id": 887,
    "word": "aging",
    "choices": [
      "議会",
      "老化",
      "正義",
      "予測"
    ],
    "correct": 1,
    "sentence": "Aging is inevitable for every human.",
    "jp": "すべての人間にとって老化は避けられないものだ。"
  },
  {
    "id": 888,
    "word": "substance",
    "choices": [
      "独占",
      "条約",
      "物質",
      "福祉"
    ],
    "correct": 2,
    "sentence": "The police arrested him for carrying a dangerous substance in a public place.",
    "jp": "警察は彼を公共の場での危険物所持で逮捕した。"
  },
  {
    "id": 889,
    "word": "discourage",
    "choices": [
      "翻訳する",
      "区別する",
      "高める",
      "落胆させる"
    ],
    "correct": 3,
    "sentence": "My parents tried to discourage me from getting a part-time job.",
    "jp": "両親は私がアルバイトをするのをやめさせようとした。"
  },
  {
    "id": 890,
    "word": "foundation",
    "choices": [
      "順序",
      "不況",
      "基礎",
      "軸"
    ],
    "correct": 2,
    "sentence": "Freedom is the foundation of human rights.",
    "jp": "自由は人権の基礎である。"
  },
  {
    "id": 891,
    "word": "infrastructure",
    "choices": [
      "国境",
      "社会基盤",
      "法律",
      "窃盗"
    ],
    "correct": 1,
    "sentence": "The government needs to invest more in infrastructure.",
    "jp": "政府はインフラにもっと投資する必要がある。"
  },
  {
    "id": 892,
    "word": "lifetime",
    "choices": [
      "資本",
      "一生",
      "学問分野",
      "契約"
    ],
    "correct": 1,
    "sentence": "The novelist wrote over 100 stories during her lifetime.",
    "jp": "その小説家は生涯に100以上の物語を書いた。"
  },
  {
    "id": 893,
    "word": "adventure",
    "choices": [
      "老化",
      "冒険",
      "10代の若者",
      "見込み"
    ],
    "correct": 1,
    "sentence": "The children set off on an adventure in the woods.",
    "jp": "子供たちは森へ冒険に出かけた。"
  },
  {
    "id": 894,
    "word": "relevant",
    "choices": [
      "罪悪感のある",
      "関連する",
      "何気ない",
      "頼りにならない"
    ],
    "correct": 1,
    "sentence": "Please do not ask questions that are not relevant to the topic.",
    "jp": "主題に関係のない質問はしないでください。"
  },
  {
    "id": 895,
    "word": "prior",
    "choices": [
      "壮大な",
      "前の",
      "感情的な",
      "礼儀正しい"
    ],
    "correct": 1,
    "sentence": "Please check your documents carefully prior to submitting them.",
    "jp": "提出前に書類をよく確認してください。"
  },
  {
    "id": 896,
    "word": "enhance",
    "choices": [
      "翻訳する",
      "高める",
      "区別する",
      "笑う"
    ],
    "correct": 1,
    "sentence": "Please use the headphones to enhance your experience of the attraction.",
    "jp": "アトラクションの体験の効果を高めるためにヘッドホンをご利用ください。"
  },
  {
    "id": 897,
    "word": "boost",
    "choices": [
      "ささげる",
      "位置する",
      "捕らえる",
      "押し上げる"
    ],
    "correct": 3,
    "sentence": "His test results gave him a real boost in confidence.",
    "jp": "テストの結果は実に彼の自信を高めた。"
  },
  {
    "id": 898,
    "word": "prediction",
    "choices": [
      "ことわざ",
      "連続物",
      "株式",
      "予測"
    ],
    "correct": 3,
    "sentence": "The prediction of snow on the TV weather forecast was incorrect.",
    "jp": "テレビの天気予報の雪の予測は間違っていた。"
  },
  {
    "id": 899,
    "word": "hypothesis",
    "choices": [
      "仮説",
      "化粧",
      "条約",
      "見知らぬ人"
    ],
    "correct": 0,
    "sentence": "This paper is based on one simple hypothesis.",
    "jp": "この論文は１つの単純な仮説に基づいている。"
  },
  {
    "id": 900,
    "word": "distinguish",
    "choices": [
      "失望させる",
      "落胆させる",
      "疲れ果てさせる",
      "区別する"
    ],
    "correct": 3,
    "sentence": "It is difficult to distinguish between rabbits and hares.",
    "jp": "ウサギとノウサギを区別するのは難しい。"
  }
];