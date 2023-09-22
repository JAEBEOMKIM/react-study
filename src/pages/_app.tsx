import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ManagedUIContext } from '@contexts/ui.context';
import ManagedModal from '@components/common/modal/managed-modal';
import ManagedDrawer from '@components/common/drawer/managed-drawer';
import { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from '@components/seo/default-seo';

// external
import 'react-toastify/dist/ReactToastify.css';

// base css file
import '@styles/scrollbar.css';
import '@styles/swiper-carousel.css';
import '@styles/custom-plugins.css';
import '@styles/tailwind.css';
import '@styles/themes.scss';
import { getDirection } from '@utils/get-direction';
import HeaderCustom from '@components/layout/header/header-custom';

var Noop: React.FC = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const router = useRouter();   
  console.log("router : ",router.route)
  const dir = getDirection(router.locale); //useRouter 를통해 현재 적용되어 있는 언어 정보를 알아낼 수 있다. 그리고 그 언어설정에 따라 최상위 Html tag의 dir(글자 방향)이 정해진다.
  useEffect(() => {
    document.documentElement.dir = dir;   //글자방향 바뀔때마다 설정
  }, [dir]);

 
  if(router.route.includes('customMenu')){
    Noop = ({children})=>{return(<><HeaderCustom>{children}</HeaderCustom></>)};
  }

  const Layout = (Component as any).Layout || Noop;


  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ManagedUIContext>
          <>
            <DefaultSeo />
            <Layout pageProps={pageProps}>
              <Component {...pageProps} key={router.route} />
            </Layout>
            <ToastContainer />
            <ManagedModal />
            <ManagedDrawer />
          </>
        </ManagedUIContext>
      </Hydrate>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default appWithTranslation(CustomApp);
