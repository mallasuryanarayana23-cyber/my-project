'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { ShieldCheck, XCircle, Play, Eye, Filter, User, MapPin } from 'lucide-react';

const mockPendingWorkers = [
  { id: 1, name: 'Rahul Sharma', location: 'Okhla, ND', skill: 'Welder', status: 'Pending', uploadedAt: '10 mins ago' },
  { id: 2, name: 'Amit Kumar', location: 'Peenya, BLR', skill: 'CNC Operator', status: 'Pending', uploadedAt: '2 hours ago' },
  { id: 3, name: 'Sandeep Singh', location: 'Manesar, GGN', skill: 'Electrician', status: 'Pending', uploadedAt: '5 hours ago' },
  { id: 4, name: 'Vikas Patel', location: 'Naroda, ADI', skill: 'Fabricator', status: 'Pending', uploadedAt: '1 day ago' },
];

const VerificationTable = () => {
  return (
    <div className="w-full bg-background min-h-screen p-8">
      <div className="container mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Admin: Verification Queue</h1>
            <p className="text-muted">Review worker videos and credentials to scale trust on SkillMap.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="primary">Export Data</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Pending Reviews', count: 124, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Approved Today', count: 42, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Rejections', count: 8, color: 'text-rose-600', bg: 'bg-rose-50' },
            { label: 'Avg Review Time', count: '1.2h', color: 'text-indigo-600', bg: 'bg-indigo-50' }
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-2xl border border-border shadow-sm ${stat.bg}`}>
              <p className="text-sm font-medium text-muted mb-1">{stat.label}</p>
              <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.count}</h3>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted">Worker Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted">Location</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted">Skill Category</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted">Video Proof</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockPendingWorkers.map((worker) => (
                <tr key={worker.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-muted" />
                      </div>
                      <span className="font-semibold">{worker.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
                    <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {worker.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-700 uppercase">
                      {worker.skill}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="group flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-all font-semibold text-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-all">
                        <Play className="h-4 w-4" />
                      </div>
                      Watch Video
                    </button>
                    <p className="text-[10px] text-muted mt-1 uppercase tracking-tight">{worker.uploadedAt}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="text-rose-600 hover:bg-rose-50 hover:text-rose-700">
                        <XCircle className="h-4 w-4 mr-1" /> Reject
                      </Button>
                      <Button variant="secondary" size="sm">
                        <ShieldCheck className="h-4 w-4 mr-1" /> Approve
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerificationTable;
