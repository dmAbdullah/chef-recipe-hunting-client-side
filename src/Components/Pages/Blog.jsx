import React from "react";
import Pdf from "react-to-pdf";
import { FaAngleDoubleDown } from "react-icons/fa";
import useTitle from "../Hook/UseTitle";

const ref = React.createRef();
const Blog = () => {
  useTitle('Blog')
  return (
    <>
      <div className="text-center">
        <Pdf targetRef={ref} filename="Assignment-10 QA.pdf">
          {({ toPdf }) => (
            <button
              className=" bg-orange-400 p-3 rounded-lg font-semibold mt-5 text-center inline-flex items-center gap-2"
              onClick={toPdf} 
            >
              <FaAngleDoubleDown/> Download Pdf <FaAngleDoubleDown/>
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div>
          <div
            className="hero min-h-8 my-5"
            style={{
              backgroundImage: `url("https://img.freepik.com/free-photo/unrecognizable-asian-woman-sitting-cafe-working-laptop_1098-17167.jpg?w=740&t=st=1683155203~exp=1683155803~hmac=b7e446c62d731b1cdcf9553e67e3d5d218e949abf4fe37750b84624481c9476f")`,
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Blog</h1>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="shadow-xl mb-5 p-2">
              <p className="font-bold text-lg">
                1. Tell us the differences between uncontrolled and controlled
                components
              </p>
              <p>
                In React, controlled components refer to components that have
                their state and behavior controlled by the parent component.
                These components rely on props passed down from the parent
                component to update their state and behavior. Uncontrolled
                components refer to components that manage their own state
                internally. They use a ref to access the DOM element's current
                value and update the state accordingly.
              </p>
            </div>
            <div className="shadow-xl mb-5 p-2">
              <p className="font-bold text-lg">
                2. How to validate React props using PropTypes
              </p>
              <p>
                PropTypes is a typechecking library that validates the props
                passed to a component and provides warnings in the console if
                the passed props do not match the expected data type or if any
                required props are missing. PropTypes is mainly used for
                development purposes to catch errors early and provide warnings
                to the developer. It is not intended to replace server-side
                validation or to provide security against malicious attacks.
              </p>
            </div>
            <div className="shadow-xl mb-5 p-2">
              <p className="font-bold text-lg">
                3. Tell us the difference between nodejs and express js.
              </p>
              <p>
                Express is a minimal and flexible node. js web application
                framework, providing a robust set of features for building
                single and multi-page, and hybrid web applications. On the other
                hand, Node. js is detailed as "A platform built on Chrome's
                JavaScript runtime for easily building fast, scalable network
                applications".
              </p>
            </div>
            <div className="shadow-xl mb-5 p-2">
              <p className="font-bold text-lg">
                4. What is a custom hook, and why will you create a custom hook?
              </p>
              <p>
                In React, a custom hook is a JavaScript function that starts
                with the prefix "use" and allows you to extract reusable logic
                from a component. A custom hook is used to share stateful logic
                between components without duplicating the code. The main
                benefits of using custom hooks are: <br />
                1. Reusability: Custom hooks allow developers to extract and
                reuse common logic in multiple components. This helps to reduce
                code duplication and keeps the codebase organized and
                maintainable. <br />
                2. Simplicity: Custom hooks simplify the code by separating the
                business logic from the presentation logic. This helps to keep
                the components small and focused, making them easier to
                understand and maintain. <br />
                3. Testability: Custom hooks can be easily tested in isolation,
                making it easier to write unit tests and ensure the code is
                working as expected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
