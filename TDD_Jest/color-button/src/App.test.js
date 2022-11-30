import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

// test : test 의 집합 (테스트 설명, 테스트 실행 함수)
test("renders learn react link", () => {
    // render 로 그려주고
    render(<App />);
    // screen 으로 접근
    const linkElement = screen.getByText(/learn react/i);
    // 'learn react' 텍스트가 있는 지 확인
    expect(linkElement).toBeInTheDocument();
});

test("버튼이 제대로 동작하고 있습니까?", () => {
    render(<App />);

    // WAI-ARIA 를 이용해서 button의 역할을 하는 요소를 검색하며, 요소안의 텍스트는 'change to blue!' 여야 합니다.
    const button = screen.getByRole("button", {name: "change to blue!"});

    // 버튼이 backgroundColor: "red" 스타일을 가지고 있는지 기대
    expect(button).toHaveStyle({backgroundColor: "red"});

    // fireEvent 클릭 이벤트 감지
    fireEvent.click(button);
    expect(button).toHaveStyle({backgroundColor: "blue"});
    // 텍스트가 'change to red!'가 되는지 기대
    expect(button.textContent).toBe("change to red!");
});
