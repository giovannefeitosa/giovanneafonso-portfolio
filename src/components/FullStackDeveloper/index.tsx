import styles from './styles';

export default function FullStackDeveloper() {
  const s = styles();

  return (
    <h1 className={s.h1}>
      <span className={s.front}>
        <span className={s.front_fulls}>Full S</span>
        <span className={s.front_ack}>ack</span>
        <span className={s.break} />
        <span className={s.front_deve}>Deve</span>
        <span className={s.front_oper}>oper</span>
      </span>
      <span className={s.back}>
        <span className={s.back_fulls}>Full S</span>
        <span className={s.back_ack}>ack</span>
        <span className={s.break} />
        <span className={s.back_deve}>Deve</span>
        <span className={s.back_oper}>oper</span>
      </span>
      <span className={s.image} />
    </h1>
  );
}
