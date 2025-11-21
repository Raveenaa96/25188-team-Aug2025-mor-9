 React Life Cycle
=================
Class compoenent
     There are 4 Phases
     
          - Initial Phase
               constructor()

          - Mouniting Phase
               render()
               componentDidMount()

          - Updating phase
               componentDidUpdate()
               componentDidCatch()
               
          - Umounting Phase
               componentWillUnmount()

================================================================================================================
How to achieve lifeCycle in React Function Component?
-----------------------------------------------------
   In React hooks via achevie this life cycle method. there are :

          - useLayoutEffect
          - useEffect 

  - useEffect is a pefrom side effect of functional component

   Basic Syntax:
   ============

          useEffect(()=>{

          },[])


   Explanation Phases :-

          useEffect(()=>{
               // Initial Phase and Mounting Phase

               return(()=>{
                    // Unmounting - Phase
               })
          },[
               // Updating - Phase
          ])