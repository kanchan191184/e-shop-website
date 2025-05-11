import classes from "./Button.module.scss";
export default function Button({ variants = ["primary"], children, ...rest }) {
  let classNames = classes.btn;
  variants.forEach(
    (name) => (classNames += " " + (classes[name] ?? classes["primary"]))
  );
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
