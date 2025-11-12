import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
} from "@pdf-viewer/react";

const AppPdfViewer = ({ pdfSrc }) => {
  return (
    <RPConfig licenseKey="YOUR_LICENSE_KEY">
      <RPProvider src={pdfSrc}>
        <RPDefaultLayout>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
  );
};

export default AppPdfViewer;
