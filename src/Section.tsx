type SectionProps = {
  id: string;
  title: string;
  children: string;
}

const Section = (props: SectionProps) => {

  return (
    <>
      <section id={props.id} style={{backgroundColor: props.color}}>
        <h1>{props.title}</h1>
        <p>{props.children}</p>
      </section>
    </>
  )
}
export default Section
