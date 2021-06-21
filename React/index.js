// import React from 'react';
// import ReactDom from 'react-dom';

// 함수형 컴포넌트
function helloWorldButton() {
    // 비구조화 할당
    const [isClick, setClickState] = React.useState(false); // 컴포넌트의 상태를 설정하는 메소드
    const text = isClick ? "Bye world!" : "Hello world!";

    return React.createElement("button", {
        onClick: () => setClickState(!isClick)
    }, text);
}

const rootContainer = document.getElementById("react-root");
ReactDOM.render(React.createElement(helloWorldButton), rootContainer);