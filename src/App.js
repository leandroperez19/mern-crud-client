import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PostForm, NotFoundPage } from "./pages";
import { PostProvider } from "./context/postsContext";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-900 min-h-screen flex-items-center">
        <div className="px-10 container m-auto">
          <PostProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new" element={<PostForm />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PostProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
