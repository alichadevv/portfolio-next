'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    fetch('/api/server');
  }, []);

  return (
    <footer id="footer" className="py-4">
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}
      >
        <IconButton
          color="info"
          aria-label="Twitter"
          href="https://github.com/Xydlan"
          className="text-black dark:text-white"
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="error"
          aria-label="Instagram"
          className="text-black dark:text-white"
          href="https://instagram.com/xydlanlux"
        >
          <Instagram />
        </IconButton>
      </Box>
      <div className="text-center">
        Copyright © {new Date().getFullYear()} — <strong>xydlanlux</strong>
      </div>
    </footer>
  );
}
