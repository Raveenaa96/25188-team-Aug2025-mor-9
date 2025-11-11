export default function StudentsList(){
    const onlineStud=["Shenbagam","Shreepal"]
    const offlineStud=["Pavithra","Jesintha","Laxmi","Marimuthu","Prem Kumar"]
    return(
        <div className="students-list">
            <div className="online-stud">
                <h3>ONLINE STUDENTS</h3>
                {onlineStud && onlineStud.length!=0 && onlineStud.map((value,index)=>{return <h4>{value}</h4>})}
            </div>
            <div className="offline-stud">
                <h3>OFFLINE STUDENTS</h3>
                {offlineStud && offlineStud.length!=0 ? offlineStud.map((value,index)=>{return <h4>{value}</h4>}):<h4>Offline Students are not present today in classrom</h4>}
            </div>
        </div>
    )
}