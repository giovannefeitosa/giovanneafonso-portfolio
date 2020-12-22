import { createStyles, makeStyles, Theme } from "@material-ui/core";

const front = {
  color: '#779',
  fullStackSize: 32,
  developerSize: 36,
};

const back = {
  color: '#336',
  fullStackSize: front.fullStackSize + 3,
  developerSize: front.developerSize + 3,
};

export default makeStyles((theme) => {
  return createStyles({
    h1: {
      position: 'relative',
      lineHeight: "50px",
      textShadow: '2px 4px 10px #000',
      marginTop: '0px',
      fontWeight: 'normal',
    },
    image: {
      display: 'block',
      position: 'absolute',
      top: -40,
      left: 55,
      width: 120,
      height: 180,
      // backgroundColor: 'rgba(255,0,0,.5)',
      backgroundImage: `url(/hireme.png)`,
      backgroundSize: '100% 100%',
      zIndex: 2,
    },
    break: {
      display: 'block',
    },
    front: {
      position: 'relative',
      color: front.color,
      zIndex: 3,
    },
    back: {
      position: 'relative',
      color: back.color,
      zIndex: 1,
    },
    front_fulls: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '175px',
      fontSize: front.fullStackSize,
    },
    back_fulls: {
      position: 'absolute',
      top: 0,
      left: -5,
      width: '175px',
      fontSize: back.fullStackSize,
    },
    front_ack: {
      position: 'absolute',
      top: 0,
      left: 150,
      fontSize: front.fullStackSize,
    },
    back_ack: {
      position: 'absolute',
      top: 0,
      left: 150,
      fontSize: back.fullStackSize,
    },
    front_deve: {
      position: 'absolute',
      top: 45,
      left: 24,
      fontSize: front.developerSize,
    },
    back_deve: {
      position: 'absolute',
      top: 45,
      left: 19,
      fontSize: back.developerSize,
    },
    front_oper: {
      position: 'absolute',
      top: '45px',
      left: 84,
      marginLeft: '40px',
      fontSize: front.developerSize,
    },
    back_oper: {
      position: 'absolute',
      top: '45px',
      left: 84,
      marginLeft: '40px',
      fontSize: back.developerSize,
    },
  }); // return
});
