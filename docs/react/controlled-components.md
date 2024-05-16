# Controlled Components

Controlled components are the react components who have their state stored and controlled by React using `useState`.
This means any change to state will by controlled by React to update the DOM.

Controlled means also the software can control what to be done with any user inputs. In case of form, user enters a value in a field.
We can handle this event and either store this value to a store and display the same or even not display the same and instead mask it, etc.

Uncontrolled components on the other had are the components that aren't controlled by React. For example, if a component
uses `useRef` component and directly updates DOM by itself. Or directly uses native HTML form elements.
