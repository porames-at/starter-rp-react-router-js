import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
} from "@pdf-viewer/react";

const AppPdfViewer = (props) => {
  const { showToolbar = true, defaultLayoutProps, pdfSrc } = props;
  return (
    <RPConfig licenseKey="YOUR_LICENSE_KEY">
      <RPProvider src={pdfSrc}>
        {showToolbar ? (
          <RPDefaultLayout {...defaultLayoutProps}>
            <RPPages />
          </RPDefaultLayout>
        ) : (
          <div style={{ width: "100%", height: "550px" }}>
            <RPPages />
          </div>
        )}
      </RPProvider>
    </RPConfig>
  );
};

export default AppPdfViewer;
