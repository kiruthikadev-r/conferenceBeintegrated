"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

interface FilterProps {
  onFilter: (filters: {
    specialization: string
    format: string
    country: string
    searchTerm: string
  }) => void
  allConferences: any[]
}

export default function ConferenceFilter({ onFilter, allConferences }: FilterProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [format, setFormat] = useState("")
  const [country, setCountry] = useState("")

  const specializations = [...new Set(allConferences.map((c) => c.specialization))]
  const formats = [...new Set(allConferences.map((c) => c.format))]
  const countries = [...new Set(allConferences.map((c) => c.country))]

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    onFilter({ specialization, format, country, searchTerm: value })
  }

  const handleSpecialization = (value: string) => {
    setSpecialization(value)
    onFilter({ specialization: value, format, country, searchTerm })
  }

  const handleFormat = (value: string) => {
    setFormat(value)
    onFilter({ specialization, format: value, country, searchTerm })
  }

  const handleCountry = (value: string) => {
    setCountry(value)
    onFilter({ specialization, format, country: value, searchTerm })
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSpecialization("")
    setFormat("")
    setCountry("")
    onFilter({ specialization: "", format: "", country: "", searchTerm: "" })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Filters</h3>
        {(searchTerm || specialization || format || country) && (
          <button
            onClick={clearFilters}
            className="text-sm text-secondary hover:text-primary flex items-center gap-1 mb-4"
          >
            <X size={14} />
            Clear all
          </button>
        )}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
        <input
          type="text"
          placeholder="Search conferences..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground block">Specialization</label>
        <select
          value={specialization}
          onChange={(e) => handleSpecialization(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Specializations</option>
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground block">Format</label>
        <select
          value={format}
          onChange={(e) => handleFormat(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Formats</option>
          {formats.map((fmt) => (
            <option key={fmt} value={fmt}>
              {fmt}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground block">Country</label>
        <select
          value={country}
          onChange={(e) => handleCountry(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Countries</option>
          {countries.sort().map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
