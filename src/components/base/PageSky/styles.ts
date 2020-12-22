import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme) => {
  return createStyles({
    wrapper: {
      minHeight: '100vh',
      background: '#000',
    },
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      /* background: 'url("https://i.pinimg.com/originals/79/3a/a0/793aa055b8ff2d656d8d88980752b493.jpg")', */
      background: 'url("https://store-images.s-microsoft.com/image/apps.49068.14458991885146991.028b24d1-0638-459d-bdfd-a6955fe1edf1.4b558854-e8dc-439e-84e1-7506fa8358a5?mode=scale&q=90&h=1080&w=1920")',
      /* background: 'url("https://www.lifewire.com/thmb/BQdMoVsHlk8HaZiZ2tv0elBfFO8=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/tropical-beach-wallpaper-beach-backgrounds-587fbb765f9b584db3241860.jpg")', */
      backgroundSize: 'cover',
      zIndex: 1,
      opacity: 0.3,
    },
    main: {
      padding: theme.spacing(3, 3),
    },
    content: {
      zIndex: 2,
    }
  }); // return
});
