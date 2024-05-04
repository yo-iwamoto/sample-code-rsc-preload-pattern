import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./button.stories";

const { Default } = composeStories(stories);

describe("button", () => {
  it("renders unchanged", () => {
    const { asFragment } = render(<Default />);

    expect(asFragment()).toMatchSnapshot();
  });
});
