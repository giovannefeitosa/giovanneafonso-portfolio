import Head from "next/Head";
import PageSky from "../src/components/base/PageSky";
import styles from './styles';
import FullStackDeveloper from "../src/components/FullStackDeveloper";

export default function Home() {
  const s = styles();

  return (
    <PageSky>
      <FullStackDeveloper />
    </PageSky>
  );
}
