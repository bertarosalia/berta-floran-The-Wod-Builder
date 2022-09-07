import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a not found page component", () => {
  describe("When is rendered", () => {
    test("Then it should show a text 'cansadoNotFoundPeque' as name of the image inside", () => {
      render(<NotFoundPage />);

      const expectedTitle = screen.getByText("Page Not Found 404");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
