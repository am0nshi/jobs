import CounterBlock from './CounterBlock'
const CounterArea = () => {
  return (
    <div className="counter-area">
      <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
        <CounterBlock
          title="Total Applied"
          countAmount={250}
          srcIcon={"assets/images/icon/tt-applied.svg"}
        />
        <CounterBlock
          title="Saved Jobs"
          sectionName='two'
          countAmount={150}
          srcIcon={"assets/images/icon/save-job.svg"}
        />
        <CounterBlock
          title="Message"
          sectionName='three'
          countAmount={120}
          srcIcon={"assets/images/icon/massage.svg"}
        />
        <CounterBlock
          title="Review CV"
          sectionName='four'
          countAmount={500}
          srcIcon={"assets/images/icon/cv-review.svg"}
        />
      </div>
    </div>
  )
}

export default CounterArea