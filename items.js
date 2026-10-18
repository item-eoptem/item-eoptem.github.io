// 잇템없템 시리즈 목록
// 새 편은 배열 맨 위에 추가하세요. (위에 있을수록 페이지에서도 위에 보여요)
// no(편 번호)와 items의 no(상품 번호)는 한 번 올린 뒤에는 절대 바꾸지 마세요.
// 상품 번호는 편이 바뀌어도 이어서 매깁니다.
// date(공개일, 한국 시간)가 되기 전에는 그 편이 페이지에 보이지 않아요. 예약 게시 날짜와 맞춰주세요.
// id는 영문 소문자로: 주소 뒤에 #id 를 붙이면 그 편으로, #no5 를 붙이면 5번 상품으로 바로 이동해요.
window.SERIES = [
  { no: 11, id: "housewarming", title: "집들이 선물템", date: "2026-10-28", items: [
    { no: 41, zone: "거실", name: "디퓨저",         why: "집 들어서면 은은한 향",        url: "https://link.coupang.com/a/hWTpNBpYtg" },
    { no: 42, zone: "욕실", name: "호텔 수건 세트", why: "실패 없는 실용 선물",          url: "https://link.coupang.com/a/hWTrJUXsyW" },
    { no: 43, zone: "창가", name: "미니 화분",      why: "창가에 초록 한 점",            url: "https://link.coupang.com/a/hWTtFmauRM" },
    { no: 44, zone: "주방", name: "원목 트레이",    why: "티타임도 플레이팅도",          url: "https://link.coupang.com/a/hWTvsGCgQC" }
  ]},
  { no: 10, id: "picnic", title: "가을 나들이템", date: "2026-10-27", items: [
    { no: 37, zone: "현관", name: "피크닉 매트",      why: "단풍 아래 펼치기",            url: "https://link.coupang.com/a/hWTcZUY6aO" },
    { no: 38, zone: "현관", name: "보냉 백",          why: "도시락과 음료 챙기기",        url: "https://link.coupang.com/a/hWTfD1GFDo" },
    { no: 39, zone: "현관", name: "접이식 캠핑 의자", why: "가볍게 들고 나가기",          url: "https://link.coupang.com/a/hWThQ96pB6" },
    { no: 40, zone: "현관", name: "보조배터리",       why: "사진 많이 찍는 날 필수",      url: "https://link.coupang.com/a/hWTn6TSzWm" }
  ]},
  { no: 9, id: "office", title: "회사 책상템", date: "2026-10-26", items: [
    { no: 33, zone: "책상 아래", name: "발 받침대",      why: "다리 올려두고 편하게",        url: "https://link.coupang.com/a/hWS32TX9tQ" },
    { no: 34, zone: "의자",      name: "등받이 쿠션",    why: "허리 뒤를 받쳐주기",          url: "https://link.coupang.com/a/hWS6Xyv21A" },
    { no: 35, zone: "책상",      name: "책상 보조 서랍", why: "자잘한 물건을 한곳에",        url: "https://link.coupang.com/a/hWS9h2llbU" },
    { no: 36, zone: "모니터",    name: "모니터 메모보드", why: "모니터 옆에 메모 붙이기",    url: "https://link.coupang.com/a/hWTbF8teqi" }
  ]},
  { no: 8, id: "laundry", title: "세탁템", date: "2026-10-25", items: [
    { no: 29, zone: "베란다", name: "접이식 빨래 건조대", why: "안 쓸 땐 접어서 보관",      url: "https://link.coupang.com/a/hWSSox4zWm" },
    { no: 30, zone: "세탁기", name: "세탁망 세트",        why: "옷끼리 엉키지 않게",          url: "https://link.coupang.com/a/hWSUEjZgQe" },
    { no: 31, zone: "옷장",   name: "보풀 제거기",        why: "니트 보풀 깔끔하게",          url: "https://link.coupang.com/a/hWSWne5kyW" },
    { no: 32, zone: "옷장",   name: "니트 전용 옷걸이",   why: "어깨 뿔 걱정 덜기",           url: "https://link.coupang.com/a/hWS0MHTEgS" }
  ]},
  { no: 7, id: "storage", title: "좁은 방 수납템", date: "2026-10-24", items: [
    { no: 25, zone: "옷장", name: "다단 바지 걸이", why: "옷걸이 하나에 바지 여러 벌",    url: "https://link.coupang.com/a/hWSIKD2gWO" },
    { no: 26, zone: "문",   name: "도어 훅",        why: "문에 걸기만 하면 수납 공간",    url: "https://link.coupang.com/a/hWSKnCpoHI" },
    { no: 27, zone: "벽",   name: "무타공 벽 선반", why: "못 없이 설치",                  url: "https://link.coupang.com/a/hWSLQLz736" },
    { no: 28, zone: "틈새", name: "틈새 수납장",    why: "가구 사이 빈틈 활용",           url: "https://link.coupang.com/a/hWSOm0F3jU" }
  ]},
  { no: 6, id: "sleep", title: "숙면템", date: "2026-10-23", items: [
    { no: 21, zone: "창문", name: "암막 커튼",     why: "아침 햇빛 가리기",              url: "https://link.coupang.com/a/hWSypjjQPd" },
    { no: 22, zone: "침대", name: "메모리폼 베개", why: "목을 받쳐주는 베개",            url: "https://link.coupang.com/a/hWSCNn3XPw" },
    { no: 23, zone: "침대", name: "수면 안대",     why: "빛을 가려 푹 자기",             url: "https://link.coupang.com/a/hWSFnxUAge" },
    { no: 24, zone: "협탁", name: "백색소음기",    why: "주변 소음을 부드럽게 덮기",     url: "https://link.coupang.com/a/hWSHcd2Ol2" }
  ]},
  { no: 5, id: "desk", title: "책상템", date: "2026-10-22", items: [
    { no: 17, zone: "책상", name: "모니터 받침대", why: "모니터는 눈높이로, 아래는 수납으로", url: "https://link.coupang.com/a/hWSn1c9gqW" },
    { no: 18, zone: "책상", name: "LED 스탠드",    why: "밤 작업할 때 손 밝게",          url: "https://link.coupang.com/a/hWSqkRZx48" },
    { no: 19, zone: "책상", name: "손목 받침대",   why: "타이핑할 때 손목 받쳐주기",     url: "https://link.coupang.com/a/hWSs37DsQK" },
    { no: 20, zone: "책상", name: "케이블 클립",   why: "책상 위 선을 한 줄로",          url: "https://link.coupang.com/a/hWSuJ0VRme" }
  ]},
  { no: 4, id: "bathroom", title: "욕실템", date: "2026-10-21", items: [
    { no: 13, zone: "샤워", name: "샤워기 필터",       why: "샤워기에 끼우기만 하면 끝",  url: "https://link.coupang.com/a/hWR7aWqAW4" },
    { no: 14, zone: "벽",   name: "흡착 선반",         why: "못 없이 붙이는 욕실 수납",   url: "https://link.coupang.com/a/hWScngYjvw" },
    { no: 15, zone: "바닥", name: "미끄럼 방지 매트",  why: "젖은 바닥에서 덜 미끄럽게",  url: "https://link.coupang.com/a/hWSiRwhi2e" },
    { no: 16, zone: "구석", name: "슬림 휴지통",       why: "좁은 틈에도 쏙",             url: "https://link.coupang.com/a/hWSlsTNRD2" }
  ]},
  { no: 3, id: "kitchen", title: "자취 주방템", date: "2026-10-20", items: [
    { no: 9,  zone: "싱크대", name: "배수구 거름망",       why: "음식물 찌꺼기 걸러내기",     url: "https://link.coupang.com/a/hWRYcoIu2m" },
    { no: 10, zone: "조리대", name: "미니 밥솥",           why: "1~2인분만 딱 맞게",          url: "https://link.coupang.com/a/hWR0llGXsq" },
    { no: 11, zone: "냉장고", name: "냉장고 정리 트레이",  why: "칸칸이 나눠 꺼내기 쉽게",    url: "https://link.coupang.com/a/hWR2UlIYEu" },
    { no: 12, zone: "냉장고", name: "자석 키친타월 걸이",  why: "냉장고 옆면에 착 붙이기",    url: "https://link.coupang.com/a/hWR4PMchvE" }
  ]},
  { no: 2, id: "season", title: "가을 환절기템", date: "2026-10-19", items: [
    { no: 5, zone: "침대 옆", name: "미니 가습기", why: "자고 일어나도 목이 덜 칼칼하게", url: "https://link.coupang.com/a/hWRM4iavvw" },
    { no: 6, zone: "주방",    name: "보온 텀블러", why: "아침 커피가 점심까지 따뜻하게",  url: "https://link.coupang.com/a/hWRRfZTk7M" },
    { no: 7, zone: "책상",    name: "무릎 담요",   why: "일교차 큰 날, 의자에 걸어두기",  url: "https://link.coupang.com/a/hWRTWAI0S4" },
    { no: 8, zone: "창가",    name: "온습도계",    why: "가습기 켤 타이밍을 숫자로",      url: "https://link.coupang.com/a/hWRWceeB6O" }
  ]},
  { no: 1, id: "jachwi", title: "자취템", items: [
    { no: 1, zone: "현관", name: "센서 무드등",    why: "밤에 들어오면 알아서 켜져요", url: "https://link.coupang.com/a/hWl3g271aK" },
    { no: 2, zone: "욕실", name: "규조토 발매트",  why: "젖은 발, 물기가 금방 말라요", url: "https://link.coupang.com/a/hWl8EvqZNY" },
    { no: 3, zone: "침대", name: "침대 밑 수납함", why: "좁은 원룸의 숨은 수납 공간", url: "https://link.coupang.com/a/hWmc6UtHG0" },
    { no: 4, zone: "책상", name: "멀티탭 정리함",  why: "엉킨 선을 상자 하나에 쏙",   url: "https://link.coupang.com/a/hWmfZu0vzE" }
  ]}
];
