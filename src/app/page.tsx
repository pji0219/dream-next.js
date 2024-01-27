import Counter from '@/components/Counter';
import Image from 'next/image';
import os from 'os'; // 노드 APIs

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
  서버 상에 있는 파일을 읽고 쓸 수 있다.
  서버 상에 있는 데이터베이스에 입출력을 할 수 있다.
  노드에서 동작하는 코드이기 때문에 노드에서 할 수 있는 것들을 할 수 있다.

  서버에서 동작하고 있기 때문에 브라우저에서 동작하는 상태를 기억하거나
  컴포넌트가 브라우저에 보여지는지 안보여지는지 이런 브라우저에서 동작하는데 필요한 상태 같은 것,
  메모리 저장하는 것, 로컬 호스트에 저장하고 읽고 쓰는 것은 불가능 하다.
 */
export default function HomePage() {
  console.log('안녕!! - 서버');
  console.log(os.hostname());

  // 서버 컴포넌트이기 때문에 사용 불가
  // const [name, setName] = useState('');
  return (
    <>
      <h1>홈 페이지다! ver4</h1>
      <Counter />
      {/* 이미지 주소로 가져올 경우에는 next.config에서 설정해주어야한다. */}
      <Image
        src='https://mblogthumb-phinf.pstatic.net/MjAxNzAzMTVfMjg4/MDAxNDg5NTMzMTAwMzU5.u9nlK1lF0wP5i5l6oyNw0Z479HoiyIEklEW8f_Hjwwgg.LFGQAUkRPJf529nZNdOFrLIxl1oldUzOQly0NZVF4_Yg.JPEG.doghter4our/IMG_5253.jpg?type=w800'
        alt='꼬부기'
        width={400}
        height={400}
      />
    </>
  );
}
