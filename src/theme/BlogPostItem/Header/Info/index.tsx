import React, { useEffect, useRef } from "react";
import Info from "@theme-original/BlogPostItem/Header/Info";
import type InfoType from "@theme/BlogPostItem/Header/Info";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof InfoType>;

export default function InfoWrapper(props: Props): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const time = ref.current?.querySelector("time");
    if (time?.dateTime) {
      time.textContent = new Date(time.dateTime).getFullYear().toString();
    }
  }, []);

  return (
    <div ref={ref}>
      <Info {...props} />
    </div>
  );
}
