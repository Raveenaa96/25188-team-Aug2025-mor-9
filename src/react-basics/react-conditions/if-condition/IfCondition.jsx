export default function IfCondition(){
    const isOpen=true;
    return(
            <div className="if-condition">
                <h1>Simple If- Condition Learnings</h1>
                {isOpen && <h3>The shop is open you can enter the store</h3>}
            </div>
    )
}