/**
 서버 컴포넌트: 서버에서 실행되는 컴포넌트
 app 폴더에 있는 모든 컴포넌트들은 기본적으로 서버 컴포넌트이다.
  그래서 별도로 설정하지 않는 이상 모두 다 서버에서 실행되는 컴포넌트들이다.

  포인트
  이 코드는 서버에서 실행이 되어서 프리렌더링된 HTML페이지로 만들기 떄문에 
  브라우저에게 전송을 할 때 이 HTML 페이지로 전송이 되므로 콘솔창에
  console.log('안녕!!');가 실행 되지 않는다.

  서버에서 동작하는 것이기 때문에 브라우저에서 제공해주는 API는 사용할 수 없고
  노드 환경에서 제공해주는 노드 API를 사용할 수 있다.
  그래서 서버 컴포넌트에서 서버 상에 있는 파일 시스템에 접근이 가능하다.
 */
export default function HomePage() {
  console.log('안녕!!');

  return <h1>홈 페이지다!</h1>;
}
