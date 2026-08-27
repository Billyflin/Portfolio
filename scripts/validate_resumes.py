from pathlib import Path

from pypdf import PdfReader


root = Path(__file__).resolve().parents[1]
files = sorted((root / "output" / "pdf").glob("*.pdf"))
assert len(files) == 4, f"Expected four resumes, found {len(files)}"

public_names = {
    "Billy_Martinez_Resume_Solutions_EN.pdf",
    "Billy_Martinez_Resume_Backend_EN.pdf",
    "Billy_Martinez_CV_Soluciones_ES.pdf",
    "Billy_Martinez_CV_Backend_ES.pdf",
    "Billy_Martinez_CV.pdf",
}
public_files = sorted((root / "public" / name) for name in public_names)
assert all(file.exists() for file in public_files), "One or more public resume files are missing"

for file in [*files, *public_files]:
    reader = PdfReader(file)
    assert len(reader.pages) == 1, f"{file.name} is not one page"
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    assert "Billy Martínez" in text, f"Name is not extractable in {file.name}"
    assert "hello@billyflin.dev" in text, f"Email is not extractable in {file.name}"
    assert len(text) > 1800, f"Unexpectedly little extractable text in {file.name}"
    links = []
    for page in reader.pages:
        for annotation in page.get("/Annots", []):
            action = annotation.get_object().get("/A")
            if action and action.get("/URI"):
                links.append(str(action.get("/URI")))
    assert "mailto:hello@billyflin.dev" in links, f"Mailto link is missing in {file.name}"
    print(f"{file.parent.name}/{file.name}: 1 page, {len(text)} extractable characters, mailto OK")
