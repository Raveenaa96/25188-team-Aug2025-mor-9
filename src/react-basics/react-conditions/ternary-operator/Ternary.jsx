export default function Ternary(){
    const isLogin=false;
    return(
        <div className="ternary-operator">
            <h1>Ternary Operator - Condition Learnings</h1>
            {isLogin ? 
            (<h3>User Login Successful</h3>): 
            (<h3>Login Failed</h3>)}
        </div>
    )
}