import { AppBar, makeStyles, createStyles, Theme, Toolbar, IconButton, Typography, Container } from "@material-ui/core";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import MainDrawer from "../MainDrawer";
import styles from './styles';

export interface PageSkyProps {
  children: any;
}

export default function PageSky({ children }: PageSkyProps) {
  const s = styles();

  return (
    <div className={s.wrapper}>
      <div className={s.background} />
      <div className={s.content}>
        <MainDrawer>
          <main className={s.main}>{children}</main>
        </MainDrawer>
      </div>
    </div>
  );
}
