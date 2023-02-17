import Header from "components/atoms/header";
import Layout from "components/atoms/layout";
import Item from "components/molecules/item";
import NavBar from "components/organisms/nav-bar";

export default function Benefits() {
  const user = {
    points: "80",
  };
  const benefits = [
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "만보기",
      title: "140원 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "이번 주 미션하면",
      title: "얼마 받을지 보기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "라이브 쇼핑 보고",
      title: "포인트 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "토스뱅크로 이동해서",
      title: "지금 이자 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "행운퀴즈 풀고",
      title: "포인트 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "친구와 함께 토스 켜고",
      title: "포인트 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "버튼 누루고",
      title: "10원 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "좋아하는 브랜드에서",
      title: "브랜드 캐시백 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "토스페이 결제할 때",
      title: "할인.캐시백 받기",
    },
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "카드 쓰고",
      title: "70,000 받기",
    },
  ];
  const gainedBenefits = [
    {
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      subTitle: "만보기",
      title: "140원 받기",
    },
  ];
  return (
    <>
      <Layout type="header">
        <span>혜택</span>
      </Layout>
      
      <Layout type="body">
        <Header type="h1">혜택</Header>
        <div className="py-2">
          <Item>
            <Item.Left>내 포인트</Item.Left>
            <Item.Right hasArrow={true}>
              <span className="font-bold">{user.points} 원</span>
            </Item.Right>
          </Item>
        </div>
        <div className="mt-4">
          <Header type="h2">혜택 더 받기</Header>
          <div className="mt-4 space-y-2">
            <Item>
              <Item.Left
                logo={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                <div className="flex-col">
                  <div>쿠팡라이브 룰렛 돌리고</div>
                  <div className="font-bold">최대 1만원 캐시 도전하기</div>
                </div>
              </Item.Left>
            </Item>
            {benefits.map((item, i) => (
              <Item key={i}>
                <div className="flex justify-between">
                  <Item.Left logo={item.icons}>
                    <div className="flex-col">
                      <div>{item.subTitle}</div>
                      <div className="text-lg font-bold text-blue-500">
                        {item.title}
                      </div>
                    </div>
                  </Item.Left>
                </div>
              </Item>
            ))}
            {gainedBenefits.map((item, i) => (
              <Item key={i}>
                <div className="flex justify-between">
                  <Item.Left logo={item.icons}>
                    <div className="flex-col">
                      <div className="text-gray-500">{item.subTitle}</div>
                      <div className="text-lg font-bold text-gray-500">
                        {item.title}
                      </div>
                    </div>
                  </Item.Left>
                </div>
              </Item>
            ))}
          </div>
        </div>
      </Layout>
      
      <Layout type="nav">
        <NavBar url={"/benefits"} />
      </Layout>
    </>
  );
}
