React Props:
================

   Prpos known as properties
   Props is helps to communicate or data trasfer to Parent to child components.

                        state
   ParentComponet  --------------> Child Component



React Callbacks:
=================
     
     Callbacks is an event through passing parent component props.
     Callbacks is helps to communicate data through event via child to parent



                         state
   ParentComponet  <-------------- Child Component



Props Drilling
==============
      Passing props through multiple components just to reach a deeply nested component.

       Parent Component            ------
                                         | State - 1
                                         | State - 2
                                         | State - 3
                                         V
               ChildComponent      ------
                                         |  State - 1
                                         V
                       child      -------


Example :
=========
   function Parent() {

     const user = { name: "Saravanan" };

     return <Child user={user} />;
   }

   function Child({ user }) {
      return <GrandChild user={user} />;
   }

   function GrandChild({ user }) {
      return <h1>Hello {user.name}</h1>;
   }


