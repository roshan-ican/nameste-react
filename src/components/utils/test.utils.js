// src/test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const AllTheProviders = ({ children }) => {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    )
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }
