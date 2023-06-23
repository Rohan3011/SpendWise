import React, { useEffect, useState } from 'react'
import { useViewportSize } from '@mantine/hooks';

function useWindowSize() {
  const { height, width } = useViewportSize();
      return {size:width, isMobile: width <= 1028};
}

export default useWindowSize