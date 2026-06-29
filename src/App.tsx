import React, { useState } from 'react';

const Divider = () => (
  <div className="h-[1px] bg-gold-dim my-[40px] relative after:content-['❖'] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-bg-main after:text-gold after:px-[10px] after:text-[1.2rem]"></div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif-en text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mt-[40px] mb-4 text-center">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-white text-[1.1rem] mt-[25px] mb-[10px] flex items-center gap-[8px] before:content-['✦'] before:text-gold before:text-[0.9rem]">
    {children}
  </h3>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-gold-dim p-[18px] mb-[20px] bg-bg-card">
    {children}
  </div>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-none p-0 m-0">
    {children}
  </ul>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-[15px] mb-[12px] text-[0.95rem] break-keep before:content-['-'] before:absolute before:left-0 before:text-gold">
    {children}
  </li>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-gold font-semibold">{children}</span>
);

const Worldview = () => (
  <>
    {/* Header */}
    <div className="pt-[40px]">
      <img src="https://gbe88.uk/1/D/mab_lapsrn_x2.webp" alt="제국 배경" className="w-full h-auto object-contain border border-gold-dim mb-[15px] block" />
      <h1 className="font-serif-en text-gold text-center tracking-[2px] text-[1.8rem] mb-[5px]">Celestusia Empire</h1>
      <p className="text-center text-[0.9rem] text-text-main mt-0 mb-[30px] font-light">18세기 마도 제국, 그리고 당신의 운명</p>
    </div>

    {/* Empire Overview */}
    <SectionTitle>The Empire</SectionTitle>
    <Card>
      <List>
        <ListItem>대륙의 7할을 지배하는 압도적인 거대 패권국.</ListItem>
        <ListItem>사계절이 뚜렷하며, 대륙 동서를 가로지르는 대운하를 보유함.</ListItem>
        <ListItem>제국 전역에 마도열차가 깔려 있어 타국과의 교류가 활발히 이루어짐.</ListItem>
        <ListItem>550년 전, 고룡 <Highlight>'아르젠티엘'</Highlight>과 초대 황제 테오 셀레스티아의 맹약으로 건국됨.</ListItem>
        <ListItem>매 세대 가장 짙은 용명을 각성한 자가 황위를 이으며,<br />그가 찾아낸 명유가 제국의 황후로 군림함.</ListItem>
      </List>
    </Card>

    {/* Regions */}
    <SectionTitle>Regions</SectionTitle>
    
    <SubTitle>수도 : 아이테르노 (Aeterno)</SubTitle>
    <List>
      <ListItem>제국 북동쪽 고지대에 위치하여 쾌적하고 시원한 기후를 자랑함.</ListItem>
      <ListItem>백색 대리석과 청동 첨탑이 어우러진 눈부신 마도 도시.</ListItem>
      <ListItem>제국 교통의 요충지이자, 지방 귀족들의 화려한 타운하우스가 밀집됨.</ListItem>
    </List>

    <SubTitle>북부 : 비트라 (Vitra)</SubTitle>
    <List>
      <ListItem>상시 초가을 날씨를 띄며, 은청색 숲과 수정빛 산맥이 펼쳐짐.</ListItem>
      <ListItem>은룡 아르젠티엘이 잠든 크리스탈 특이 지형이 존재함.</ListItem>
      <ListItem>성스럽고 강한 기운이 서려 있어 대신전과 마탑의 본산으로 기능함.</ListItem>
    </List>

    <SubTitle>동부 : 코피아 (Copia)</SubTitle>
    <List>
      <ListItem>황금빛 평야와 푸른 해안이 맞닿은 제국 내 가장 부유한 곡창지대.</ListItem>
      <ListItem>대운하와 큰 무역항들이 연결되어 제국의 모든 물류를 유통함.</ListItem>
      <ListItem>제국 해군의 주요 주둔지가 위치함.</ListItem>
    </List>

    <SubTitle>서부 : 루리스 (Ruris)</SubTitle>
    <List>
      <ListItem>따뜻한 기후의 평화로운 시골 지역.</ListItem>
      <ListItem>끝없이 펼쳐진 초록 목초지와 대농장이 다수 존재함.</ListItem>
      <ListItem>인구 밀도가 낮고 가축 수가 더 많으며, 대형 과수원 기반의 양조장이 발달함.</ListItem>
    </List>

    <SubTitle>남부 : 페라 (Fera)</SubTitle>
    <List>
      <ListItem>붉은 흙과 짙은 녹음, 안개로 뒤덮인 정글 지대.</ListItem>
      <ListItem>미개발지가 대다수이며 마도열차역 주변으로만 소규모 도시가 형성됨.</ListItem>
      <ListItem>희귀 생물들이 다수 서식하며, 적룡 <Highlight>'이그니카로'</Highlight>가 거주 중인 것으로 추정됨.</ListItem>
    </List>

    <Divider />

    {/* Core Rules */}
    <SectionTitle>Core Rules</SectionTitle>
    <Card>
      <div className="mt-[5px] mb-[10px]">
        <h3 className="text-white text-[1.1rem] flex items-center gap-[8px] before:content-['✦'] before:text-gold before:text-[0.9rem]">용명 (龍鳴)</h3>
      </div>
      <List>
        <ListItem>계약한 드래곤과 공명하여 그 권능을 현세에 행사하는 힘.</ListItem>
        <ListItem>최초 계약자의 혈통에게만 발현되며, 드래곤의 격에 따라 위력이 결정됨.</ListItem>
        <ListItem>강대한 용명일수록 육체와 감각에 파괴적인 부담을 안겨줌.</ListItem>
        <ListItem>용명 각성자는 본능적으로 자신과 감응도가 높은 <Highlight>명유</Highlight>를 찾아내는 습성을 지님.</ListItem>
      </List>
      
      <div className="mt-[25px] mb-[10px]">
        <h3 className="text-white text-[1.1rem] flex items-center gap-[8px] before:content-['✦'] before:text-gold before:text-[0.9rem]">명유 (鳴癒)</h3>
      </div>
      <List>
        <ListItem>용명의 끔찍한 부작용을 감쇄시킬 수 있는 유일하고도 희귀한 체질.</ListItem>
        <ListItem>혈통이나 신분과 무관하게 대륙에 극도로 희박하게 무작위 발현됨.</ListItem>
        <ListItem>용명 각성자에게 본능적인 편안함과 안정을 제공함.</ListItem>
        <ListItem>성별에 관계없이 용명 각성자의 후계를 잉태할 수 있음.</ListItem>
        <ListItem>당신을 향한 짙은 스킨십일수록 각성자의 안정화 강도가 수직 상승함.</ListItem>
        <ListItem>선천적인 적합성뿐만 아니라 후천적인 유대감 역시 감응도에 큰 영향을 미침.</ListItem>
      </List>
    </Card>

    <Divider />

    {/* The Ancient Dragons */}
    <SectionTitle>The Ancient Dragons</SectionTitle>
    <SubTitle>은룡 아르젠티엘 (Argentiel)</SubTitle>
    <List>
      <ListItem>신성(神聖)을 품은 제국의 수호룡 (INTP).</ListItem>
      <ListItem>정화, 축복, 생명력 증대, 치유의 권능을 지니며 이를 자신의 용명자에게 위탁함.</ListItem>
      <ListItem>인간계 개입에 전혀 흥미가 없으며, 북부 산맥에 틀어박혀 수백 년째 수면 중.</ListItem>
    </List>

    <SubTitle>적룡 이그니카로 (Ignicaro)</SubTitle>
    <List>
      <ListItem>예측 불가능한 성향을 지닌 파괴적인 드래곤 (ENTP).</ListItem>
      <ListItem>아르젠티엘을 깨우려다 의도치 않게 대재앙을 일으킴.</ListItem>
      <ListItem>생각보다 컸던 인간들의 피해에 깊이 반성하고 동면에 들어감.</ListItem>
    </List>

    <Divider />

    {/* The Tragedy */}
    <SectionTitle>The Tragedy : 전이폭풍</SectionTitle>
    <Card>
      <List>
        <ListItem>제국력 511년 9월 23일, 대륙 전역을 휩쓴 차원 전이성 마력 폭풍.</ListItem>
        <ListItem>적룡 이그니카로가 은룡을 깨우기 위해 일으켰으나 실패로 끝난 대재앙.</ListItem>
        <ListItem>생명체와 사물이 무작위 장소나 차원으로 강제 전이됨.</ListItem>
        <ListItem>사망자 약 5천 명, 실종자 약 2만 명이 발생했으며 현재도 수색이 진행 중.</ListItem>
        <ListItem>당시 8세였던 <Highlight>황태자 세라피온</Highlight>마저 실종되어 '황태자 전이 사건'으로도 불림.</ListItem>
        <ListItem>이그니카로는 속죄의 의미로 대륙의 활화산 5곳을 영구 사화산으로 만들고 동면에 듦.</ListItem>
        <ListItem>이 사건을 계기로 제국 내 모든 전이 마법의 연구와 사용이 엄격히 금지됨.</ListItem>
      </List>
    </Card>
  </>
);

const Seraphion = () => (
  <>
    {/* Header */}
    <div className="pt-[40px]">
      <h1 className="font-serif-en text-gold text-center tracking-[2px] text-[1.8rem] mb-[5px]">Seraphion</h1>
      <p className="text-center text-[0.9rem] text-text-main mt-0 mb-[30px] font-light">오직 한 사람에게만 길들여지는 맹수</p>
    </div>
    
    <div className="mb-[60px]">
      <img src="https://gbe88.uk/1/D/sr.webp" alt="세라피온" className="w-full h-auto max-h-[600px] object-contain border border-gold-dim mb-[15px] bg-[#1a1a1a]" />
      <h2 className="font-serif-kr text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mt-[30px] mb-[10px] text-center">
        세라피온 인빅투스 폰 셀레스티아
      </h2>
      <p className="font-serif-en text-center text-[0.9rem] text-text-main mt-0 mb-[30px] font-light tracking-[1px]">Seraphion Invictus von Celestia</p>

      <Card>
        <List>
          <ListItem><Highlight>나이:</Highlight> 23세</ListItem>
          <ListItem><Highlight>생일:</Highlight> 08.17</ListItem>
          <ListItem><Highlight>신분:</Highlight> 제국의 2황자이자, 이번 세대의 용명 적통 각성자임.</ListItem>
        </List>
        
        <SubTitle>외양 묘사</SubTitle>
        <List>
          <ListItem>키 190cm를 훌쩍 넘는 거구에, 햇빛에 그을린 건강한 구릿빛 피부를 지님.</ListItem>
          <ListItem>야생에서 단련된 듯 우락부락하고 거친 근육질 체형임.</ListItem>
          <ListItem>은빛과 백색이 섞인 백은발을 거칠게 기른 멀릿컷 스타일로 유지함.</ListItem>
          <ListItem>짙고 어두운 심연 같은 청안과 날카롭게 찢어진 눈매를 가짐.</ListItem>
          <ListItem>늘 여유롭고 능글맞은 호선을 그리는 입매가 매력적인 조각 미남임.</ListItem>
        </List>

        <SubTitle>성향 및 태도</SubTitle>
        <List>
          <ListItem><Highlight>MBTI:</Highlight> ISTP</ListItem>
          <ListItem>만사에 무심하고 나른해 보이지만, 그 본질은 오직 단 한 사람에게만 길들여지는 맹수와 같음.</ListItem>
          <ListItem>시골에서 자랐음에도 핏줄에 각인된 오만함과 귀족적인 통제력을 자연스럽게 뿜어냄.</ListItem>
          <ListItem>당신을 향해 무심한 척 툭툭 내뱉는 직설적인 화법으로 짓궂게 장난치기를 즐김.</ListItem>
          <ListItem>은밀한 스킨십 상황에서는 매우 느린 템포로 당신의 미세한 반응 하나하나를 관찰하고 음미하는 것을 선호함.</ListItem>
          <ListItem>당신이 자신의 소유임을 끈적하게 각인시키는 행위에 집착함.</ListItem>
          <ListItem>모든 열기가 가라앉은 후에는 나른하고 따뜻한 품으로 당신을 한참 동안 안아주는 방식을 취함.</ListItem>
        </List>

        <SubTitle>과거사</SubTitle>
        <List>
          <ListItem>제국력 508년, 1황자를 제치고 온전한 용명을 각성하여 제국의 진정한 황태자로 책봉됨.</ListItem>
          <ListItem>어린 시절, 자신의 명유인 당신을 직접 찾아내어 황궁으로 데려와 미래의 반려로 낙점함.</ListItem>
          <ListItem>당시에는 틈만 나면 당신에게 입맞춤을 조르던 솔직하고 응큼한 꼬마였음.</ListItem>
          <ListItem>제국력 511년, 전이폭풍 재난에 휩쓸려 기억을 잃고 서부 국경의 시골로 떨어짐.</ListItem>
          <ListItem>농부 부부에게 거둬져 '세오'라는 이름의 평범한 청년으로 성장함.</ListItem>
          <ListItem>제국력 526년, 은퇴 후 귀농한 시종장에게 우연히 발견되어 극적으로 황궁에 귀환함.</ListItem>
          <ListItem>여전히 512년 이전의 기억은 희미하며, 화려한 본명보다는 '세오'라는 이름에 더 큰 안정감을 느낌.</ListItem>
          <ListItem>과거를 기억하지 못함에도, 오직 당신에게만은 본능적인 기시감과 맹렬한 안정을 느낌.</ListItem>
        </List>

        <SubTitle>특이사항</SubTitle>
        <List>
          <ListItem><Highlight>말투:</Highlight> 나른하고 무심하며, 오만하리만치 직설적임.</ListItem>
          <ListItem><Highlight>체향:</Highlight> 농염한 적포도 향기에 묵직한 우디 머스크와 베티버가 섞인 향취가 남.</ListItem>
          <ListItem>용명의 부작용으로 햇빛, 강한 향수, 소음 등에 극심한 고통을 느끼는 '감각 과민' 상태임.</ListItem>
          <ListItem>당신과의 감응도가 선천적으로 극상에 달해 있어, 당신의 체온과 체향만으로도 모든 과민 증세가 즉각 소멸함.</ListItem>
          <ListItem>용명의 생명력 덕분에 그의 손길이 닿은 모든 식물은 경이로운 속도로 자라남.</ListItem>
          <ListItem>무기나 농기구 등 난생처음 보는 도구도 본능적으로 완벽하게 다루는 탈인간급 신체 능력을 지님.</ListItem>
          <ListItem>복잡한 대화나 계산보다는 몸이 먼저 움직이는 행동파임.</ListItem>
          <ListItem>세오로 성장 중, 용명 부작용으로 하얀 피부가 그을린 구릿빛으로 변함.</ListItem>
        </List>
      </Card>
      
      <div className="mt-[40px]">
        <h3 className="font-serif-en text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mb-4 text-center">Gallery</h3>
        <div className="flex flex-col gap-[15px]">
          {Array.from({ length: 11 }, (_, i) => (
            <img 
              key={i} 
              src={`https://gbe88.uk/D/S_${i + 1}.webp`} 
              alt={`세라피온 일러스트 ${i + 1}`} 
              className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" 
            />
          ))}
        </div>
      </div>

      <div className="mt-[40px]">
        <h3 className="font-serif-en text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mb-4 text-center">Childhood</h3>
        <div className="flex flex-col gap-[20px]">
          <div>
            <div className="text-center text-white/70 text-[0.95rem] mb-[8px] font-serif-kr tracking-wide">5살</div>
            <img src="https://gbe88.uk/1/D/sr3.webp" alt="세라피온 어린 시절 3" className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" />
          </div>
          <div>
            <div className="text-center text-white/70 text-[0.95rem] mb-[8px] font-serif-kr tracking-wide">7~8살</div>
            <div className="flex flex-col gap-[15px]">
              <img src="https://gbe88.uk/1/D/sr1.webp" alt="세라피온 어린 시절 1" className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" />
              <img src="https://gbe88.uk/1/D/sr2.webp" alt="세라피온 어린 시절 2" className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Fidelis = () => (
  <>
    {/* Header */}
    <div className="pt-[40px]">
      <h1 className="font-serif-en text-gold text-center tracking-[2px] text-[1.8rem] mb-[5px]">Fidelis</h1>
      <p className="text-center text-[0.9rem] text-text-main mt-0 mb-[30px] font-light">완벽한 품격 아래 숨겨진 애정결핍</p>
    </div>
    
    <div className="mb-[60px]">
      <img src="https://gbe88.uk/1/D/fd.webp" alt="피델리스" className="w-full h-auto max-h-[600px] object-contain border border-gold-dim mb-[15px] bg-[#1a1a1a]" />
      <h2 className="font-serif-kr text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mt-[30px] mb-[10px] text-center">
        피델리스 아스테리아 폰 셀레스티아
      </h2>
      <p className="font-serif-en text-center text-[0.9rem] text-text-main mt-0 mb-[30px] font-light tracking-[1px]">Fidelis Asteria von Celestia</p>

      <Card>
        <List>
          <ListItem><Highlight>나이:</Highlight> 22세</ListItem>
          <ListItem><Highlight>생일:</Highlight> 02.19</ListItem>
          <ListItem><Highlight>신분:</Highlight> 세라피온을 대체하기 위해 입양된 황태자이자, 방계 출신의 용명 각성자임.</ListItem>
        </List>
        
        <SubTitle>외양 묘사</SubTitle>
        <List>
          <ListItem>키 187cm에 티 없이 맑고 하얀 도자기 같은 피부를 지님.</ListItem>
          <ListItem>귀족적인 옷태 아래로 듬직하게 벌어진 어깨와 다부진 근육질 체형을 감추고 있음.</ListItem>
          <ListItem>단정하게 쳐낸 짧은 백은발과 맑고 투명한 푸른빛 벽안을 지님.</ListItem>
          <ListItem>보는 이의 마음을 녹이는 부드럽고 다정한 눈매의 정석적인 미남임.</ListItem>
        </List>

        <SubTitle>성향 및 태도</SubTitle>
        <List>
          <ListItem><Highlight>MBTI:</Highlight> ISFJ</ListItem>
          <ListItem>겉으로는 완벽한 품격과 다정함을 갖춘 황족이지만, 내면은 지독한 피로와 애정결핍으로 곪아 있음.</ListItem>
          <ListItem>자신이 사랑받을 가치가 있다는 것을 증명하기 위해 당신의 칭찬과 인정에 맹목적으로 매달림.</ListItem>
          <ListItem>억눌러온 애정만큼 당신의 온기와 접촉에 심각하게 중독된 모습을 보임.</ListItem>
          <ListItem>은밀한 스킨십 상황에서는 필사적으로 당신과 시선을 맞추며 헌신적으로 얽혀드는 것을 선호함.</ListItem>
          <ListItem>자신의 행위에 대해 당신에게 끊임없이 사랑을 확인받고자 하는 애처로운 갈구함을 보임.</ListItem>
          <ListItem>무척 다정하고 부드럽게 리드하지만, 그 기저에는 끈적한 집착이 묻어나는 리듬을 유지함.</ListItem>
          <ListItem>끝난 후에는 당신을 신앙처럼 떠받들며 끝없이 보살피고 안도함.</ListItem>
        </List>

        <SubTitle>과거사</SubTitle>
        <List>
          <ListItem>본래 황가의 방계인 아스테리아 후작가의 차남으로 태어남.</ListItem>
          <ListItem>제국력 510년, 미약하게나마 용명을 각성하여 가문의 전폭적인 지원을 받음.</ListItem>
          <ListItem>세라피온이 실종된 직후, 가문의 압박에 의해 억지로 황가에 입양되어 황태자의 자리를 꿰참.</ListItem>
          <ListItem>선천적으로 약한 용명을 강제로 증폭시키며 뼈를 깎는 혹독한 제왕학을 견뎌냄.</ListItem>
          <ListItem>부작용으로 몸이 망가지고 정신이 무너질 때마다 오직 당신의 곁에서만 숨을 돌릴 수 있었음.</ListItem>
          <ListItem>용명과 명유라는 본능적 이끌림을 넘어 당신을 하나의 인격체로서 깊이 사랑하게 됨.</ListItem>
          <ListItem>흠집 없는 황태자가 되기 위해 자신의 맹렬한 욕구를 금욕적인 척 필사적으로 억눌러 옴.</ListItem>
          <ListItem>제국력 526년, 정식 황제 즉위식을 불과 한 달 앞두고 세라피온이 귀환하는 사태가 벌어짐.</ListItem>
          <ListItem>황제가 "정식 황태자의 자리는 명유이자 차기 황태자비인 당신의 선택에 맡기겠다"고 선언한 사실을 인지하고 있음.</ListItem>
        </List>

        <SubTitle>특이사항</SubTitle>
        <List>
          <ListItem><Highlight>말투:</Highlight> 언제나 나긋나긋하고 품격이 넘치며 다정함.</ListItem>
          <ListItem><Highlight>체향:</Highlight> 달콤한 블랙베리 향에 맑은 은방울꽃(뮤게), 그리고 차분한 시더우드 향이 어우러짐.</ListItem>
          <ListItem>억지로 짜낸 용명의 부작용으로 만성 피로, 발열, 손끝의 잔떨림 등 '신체 과부하'를 달고 삶.</ListItem>
          <ListItem>오랜 시간 당신과 의지하며 함께해 온 덕분에 후천적인 감응도가 극한까지 상승한 케이스임.</ListItem>
          <ListItem>당신과 가벼운 접촉만 해도 무너져가는 신체의 과부하가 경이로운 효율로 회복됨.</ListItem>
          <ListItem>제국 아카데미 수석 졸업자이며 행정과 제왕학에 있어 타의 추종을 불허하는 천재임.</ListItem>
          <ListItem>정치계에서는 성군이 될 재목이라 칭송받으며, 소드마스터의 경지에 오르기 직전의 뛰어난 검사임.</ListItem>
          <ListItem>공식적인 사교 모임을 피곤해하며, 오직 당신 앞에서만 완벽한 가면을 벗고 무방비하게 풀어짐.</ListItem>
        </List>
      </Card>

      <div className="mt-[40px]">
        <h3 className="font-serif-en text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mb-4 text-center">Gallery</h3>
        <div className="flex flex-col gap-[15px]">
          {Array.from({ length: 11 }, (_, i) => (
            <img 
              key={i} 
              src={`https://gbe88.uk/D/F_${i + 1}.webp`} 
              alt={`피델리스 일러스트 ${i + 1}`} 
              className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" 
            />
          ))}
        </div>
      </div>

      <div className="mt-[40px]">
        <h3 className="font-serif-en text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mb-4 text-center">Childhood</h3>
        <div className="flex flex-col gap-[20px]">
          <div>
            <div className="text-center text-white/70 text-[0.95rem] mb-[8px] font-serif-kr tracking-wide">7살</div>
            <img src="https://gbe88.uk/1/D/fd1.webp" alt="피델리스 어린 시절 1" className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" />
          </div>
          <div>
            <div className="text-center text-white/70 text-[0.95rem] mb-[8px] font-serif-kr tracking-wide">10살쯤</div>
            <img src="https://gbe88.uk/1/D/fd2.webp" alt="피델리스 어린 시절 2" className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" />
          </div>
          <div>
            <div className="text-center text-white/70 text-[0.95rem] mb-[8px] font-serif-kr tracking-wide">15살쯤</div>
            <img src="https://gbe88.uk/1/D/fd3.webp" alt="피델리스 어린 시절 3" className="w-full h-auto aspect-[3/2] object-cover border border-gold-dim bg-[#1a1a1a]" />
          </div>
        </div>
      </div>
    </div>
  </>
);

const SupportCard = ({ name, meta, children }: { name: string, meta: string, children: React.ReactNode }) => (
  <div className="border border-gold-dim bg-bg-card mb-[20px] p-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
    <div className="flex justify-between items-baseline border-b border-dashed border-gold-dim pb-[12px] mb-[16px]">
      <h3 className="text-[1.4rem] text-white font-semibold m-0">{name}</h3>
      <span className="text-[0.9rem] text-gold font-serif-en tracking-[1px]">{meta}</span>
    </div>
    <ul className="list-none p-0 m-0">
      {children}
    </ul>
  </div>
);

const SupportItem = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-[18px] mb-[12px] text-[0.95rem] leading-[1.7] break-keep before:content-['-'] before:absolute before:left-0 before:text-gold before:font-bold">
    {children}
  </li>
);

const SupportingCharacters = () => (
  <div className="w-full py-[20px] pb-[40px]">
    {/* 황실 인물들 */}
    <div className="text-center text-white/50 text-[0.85rem] tracking-[4px] -mb-[15px] mt-[40px] font-serif-en">THE IMPERIAL FAMILY</div>
    <h2 className="font-serif-kr text-gold text-[1.5rem] border-b border-gold-dim pb-[10px] mt-[20px] mb-[25px] text-center">황실</h2>
    
    <SupportCard name="루미르 (Lumir)" meta="ENTJ / 56세">
      <SupportItem>제국을 통치하는 절대자.</SupportItem>
      <SupportItem>긴 백발과 푸른 눈, 장신에 탄탄한 근육질을 지닌 미중년임.</SupportItem>
      <SupportItem>여유롭고 능글맞은 태도 이면에 누구보다 강력한 지배자의 카리스마를 숨기고 있음.</SupportItem>
      <SupportItem>황후를 향한 깊고 열렬한 애정을 숨기지 않는 지독한 애처가임.</SupportItem>
    </SupportCard>

    <SupportCard name="헬느 (Helne)" meta="ENFJ / 49세">
      <SupportItem>제국의 국모.</SupportItem>
      <SupportItem>긴 금발에 녹안을 지닌, 기품 있고 우아한 여인임.</SupportItem>
      <SupportItem>부드럽고 온화한 겉모습 속에 흔들리지 않는 단단한 내면을 간직함.</SupportItem>
      <SupportItem>황제와 극상의 감응도를 자랑하며 그의 완벽한 안식처로 존재함.</SupportItem>
    </SupportCard>

    <SupportCard name="셀레시온 (Celesion)" meta="ESTP / 28세">
      <SupportItem>제국의 1황자이자, 용명을 깨우치지 못한 미각성자.</SupportItem>
      <SupportItem>금발벽안을 지닌 수려한 미남임.</SupportItem>
      <SupportItem>황위에 얽매이지 않는 자유분방한 성정으로, 대륙 곳곳을 누비는 모험가로 활동함.</SupportItem>
    </SupportCard>

    <Divider />

    {/* 서부 농장 일가 */}
    <div className="text-center text-white/50 text-[0.85rem] tracking-[4px] -mb-[15px] mt-[40px] font-serif-en">THE WESTERN FARMERS</div>
    <h2 className="font-serif-kr text-gold text-[1.5rem] border-b border-gold-dim pb-[10px] mt-[20px] mb-[25px] text-center">서부 일가</h2>

    <SupportCard name="알버 (Alber)" meta="ESTP / 52세">
      <SupportItem>서부 지역에 거주하는 농부이자 세오의 양부.</SupportItem>
      <SupportItem>머리숱이 없는 거구에 검은 눈을 지님.</SupportItem>
      <SupportItem>작은 일에 얽매이지 않는 호탕함과 계산 없는 순박함을 동시에 지닌 어른임.</SupportItem>
    </SupportCard>

    <SupportCard name="에탸 (Etya)" meta="ESFJ / 45세">
      <SupportItem>알버의 아내이자 세오를 거둔 양모.</SupportItem>
      <SupportItem>아담한 체구에 긴 적발, 갈색 눈동자를 지님.</SupportItem>
      <SupportItem>호탕하고 시원시원한 성격 속에 누구보다 다정하고 따뜻한 마음씨를 품고 있음.</SupportItem>
    </SupportCard>

    <Divider />

    {/* 아스테리아 후작가 */}
    <div className="text-center text-white/50 text-[0.85rem] tracking-[4px] -mb-[15px] mt-[40px] font-serif-en">HOUSE OF ASTERIA</div>
    <h2 className="font-serif-kr text-gold text-[1.5rem] border-b border-gold-dim pb-[10px] mt-[20px] mb-[25px] text-center">아스테리아 후작가</h2>

    <SupportCard name="루시스 (Lucis)" meta="ISTJ / 51세">
      <SupportItem>아스테리아 가문의 가주이자 제국의 후작.</SupportItem>
      <SupportItem>은발과 붉은 눈, 늘씬한 체형을 지닌 기품 있는 미중년임.</SupportItem>
      <SupportItem>사사로운 감정보다 대의와 규율을 최우선으로 여기는 엄격하고 올곧은 성정임.</SupportItem>
    </SupportCard>

    <SupportCard name="헬레나 (Helena)" meta="ISFP / 46세">
      <SupportItem>아스테리아 후작부인.</SupportItem>
      <SupportItem>긴 청발과 은빛 눈동자, 가냘프고 늘씬한 체형을 지님.</SupportItem>
      <SupportItem>티 없이 맑고 여린 마음을 지녔으며, 주변을 편안하게 만드는 온화함이 돋보임.</SupportItem>
    </SupportCard>

    <SupportCard name="조반 (Giovan)" meta="ENFJ / 27세">
      <SupportItem>아스테리아 가문의 후계자인 소후작.</SupportItem>
      <SupportItem>짧은 청발에 벽안, 훤칠한 장신을 자랑함.</SupportItem>
      <SupportItem>다정하고 책임감 넘치는 성격으로, 자신의 동생을 끔찍하게 아끼고 보살핌.</SupportItem>
    </SupportCard>

  </div>
);

const UnsafePage = ({ isUnlocked, onUnlock }: { isUnlocked: boolean, onUnlock: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'S04295F') {
      onUnlock();
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="pt-[100px] flex flex-col items-center justify-center text-text-main">
        <span className="text-[3rem] mb-4 text-gold">🔒</span>
        <h2 className="font-serif-kr text-[1.4rem] text-gold mb-2">언세이프 갤러리</h2>
        <p className="text-[0.85rem] text-white/60 mb-[30px] text-center font-light">언세이프 상세정보에 적힌 비밀번호를 입력해주세요.</p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-[280px] flex flex-col gap-4">
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#1a1a1a] border border-gold-dim text-white text-center p-3 font-serif-en outline-none focus:border-gold transition-colors"
            placeholder="PASSWORD"
          />
          {error && <p className="text-red-400 text-center text-[0.85rem] m-0">비밀번호가 일치하지 않습니다.</p>}
          <button 
            type="submit"
            className="bg-gold/10 border border-gold text-gold py-3 font-serif-kr hover:bg-gold/20 transition-colors"
          >
            입력
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-[40px] pb-[40px]">
      <h1 className="font-serif-en text-gold text-center tracking-[2px] text-[1.8rem] mb-[5px]">Unsafe Gallery</h1>
      <p className="text-center text-[0.9rem] text-text-main mt-0 mb-[30px] font-light">성인용 이미지 갤러리</p>
      
      <div className="mb-[40px]">
        <h2 className="font-serif-kr text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mb-4 text-center">세라피온 (Seraphion)</h2>
        <div className="flex flex-col gap-[15px]">
          {Array.from({ length: 8 }, (_, i) => (
            <img 
              key={`S_${i + 12}`} 
              src={`https://gbe88.uk/D/S_${i + 12}.webp`} 
              alt={`세라피온 언세이프 ${i + 12}`} 
              className="w-full h-auto object-contain border border-gold-dim bg-[#1a1a1a]" 
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif-kr text-gold text-[1.4rem] border-b border-gold-dim pb-[8px] mb-4 text-center">피델리스 (Fidelis)</h2>
        <div className="flex flex-col gap-[15px]">
          {Array.from({ length: 8 }, (_, i) => (
            <img 
              key={`F_${i + 12}`} 
              src={`https://gbe88.uk/D/F_${i + 12}.webp`} 
              alt={`피델리스 언세이프 ${i + 12}`} 
              className="w-full h-auto object-contain border border-gold-dim bg-[#1a1a1a]" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<'worldview' | 'seraphion' | 'fidelis' | 'supporting' | 'unsafe'>('worldview');
  const [isUnsafeUnlocked, setIsUnsafeUnlocked] = useState(false);

  return (
    <div className="flex justify-center min-h-screen bg-bg-main text-text-main font-serif-kr">
      <div className="w-full max-w-[540px] min-h-screen bg-bg-main relative pb-[80px] border-l border-r border-gold-dim shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="px-[24px]">
          {currentTab === 'worldview' && <Worldview />}
          {currentTab === 'seraphion' && <Seraphion />}
          {currentTab === 'fidelis' && <Fidelis />}
          {currentTab === 'supporting' && <SupportingCharacters />}
          {currentTab === 'unsafe' && <UnsafePage isUnlocked={isUnsafeUnlocked} onUnlock={() => setIsUnsafeUnlocked(true)} />}
        </div>
        
        {/* Bottom Padding */}
        <div className="h-[40px]"></div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 w-full max-w-[540px] h-[60px] bg-bg-main border-t border-gold flex justify-around items-center z-[100] pb-[env(safe-area-inset-bottom)]">
          <button 
            onClick={() => setCurrentTab('worldview')} 
            className={`${currentTab === 'worldview' ? 'text-gold font-semibold' : 'text-gold-dim'} hover:text-gold transition-colors duration-200 no-underline font-serif-kr text-[0.8rem] sm:text-[0.9rem] flex flex-col items-center gap-[4px] bg-transparent border-none cursor-pointer p-0 w-full h-full justify-center`}
          >
            <span className="text-[1.2rem]">⚜</span>
            <span>세계관</span>
          </button>
          <button 
            onClick={() => setCurrentTab('seraphion')} 
            className={`${currentTab === 'seraphion' ? 'text-gold font-semibold' : 'text-gold-dim'} hover:text-gold transition-colors duration-200 no-underline font-serif-kr text-[0.8rem] sm:text-[0.9rem] flex flex-col items-center gap-[4px] bg-transparent border-none cursor-pointer p-0 w-full h-full justify-center`}
          >
            <span className="text-[1.2rem]">♚</span>
            <span>세라피온</span>
          </button>
          <button 
            onClick={() => setCurrentTab('fidelis')} 
            className={`${currentTab === 'fidelis' ? 'text-gold font-semibold' : 'text-gold-dim'} hover:text-gold transition-colors duration-200 no-underline font-serif-kr text-[0.8rem] sm:text-[0.9rem] flex flex-col items-center gap-[4px] bg-transparent border-none cursor-pointer p-0 w-full h-full justify-center`}
          >
            <span className="text-[1.2rem]">♔</span>
            <span>피델리스</span>
          </button>
          <button 
            onClick={() => setCurrentTab('supporting')} 
            className={`${currentTab === 'supporting' ? 'text-gold font-semibold' : 'text-gold-dim'} hover:text-gold transition-colors duration-200 no-underline font-serif-kr text-[0.8rem] sm:text-[0.9rem] flex flex-col items-center gap-[4px] bg-transparent border-none cursor-pointer p-0 w-full h-full justify-center`}
          >
            <span className="text-[1.2rem]">♙</span>
            <span>조연 소개</span>
          </button>
          <button 
            onClick={() => setCurrentTab('unsafe')} 
            className={`${currentTab === 'unsafe' ? 'text-gold font-semibold' : 'text-gold-dim'} hover:text-gold transition-colors duration-200 no-underline font-serif-kr text-[0.8rem] sm:text-[0.9rem] flex flex-col items-center gap-[4px] bg-transparent border-none cursor-pointer p-0 w-full h-full justify-center`}
          >
            <span className="text-[1.2rem]">🔒</span>
            <span>언세이프</span>
          </button>
        </div>
      </div>
    </div>
  );
}
