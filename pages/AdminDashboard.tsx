
import React, { useEffect, useState } from 'react';
import { getAllSubmissions, clearSubmissions, Submission } from '../lib/db';

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'martin' && loginForm.password === '5021') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  const fetchData = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const data = await getAllSubmissions();
      setSubmissions(data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleClear = async () => {
    if (window.confirm('Are you sure you want to clear all submission data? This cannot be undone.')) {
      await clearSubmissions();
      setSubmissions([]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FDFBF7] px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-sm shadow-xl border border-[#E8E4DE]">
          <div className="text-center mb-8">
            <h1 className="serif text-3xl font-semibold mb-2">Admin Login</h1>
            <p className="text-sm text-[#666666]">Authorized personnel only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#666666] mb-2">Username</label>
              <input type="text" className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none" value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} required />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#666666] mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
            </div>
            {loginError && <p className="text-red-600 text-xs font-medium">{loginError}</p>}
            <button type="submit" className="w-full bg-[#4A5D4E] text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#3D4D40]">Enter Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-5xl font-semibold serif">Admin Dashboard</h1>
              <button onClick={handleLogout} className="text-xs font-bold text-[#666666] uppercase tracking-widest hover:text-red-600">Logout</button>
            </div>
            <p className="text-[#666666]">Review and manage your website enquiries.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={fetchData} className="px-6 py-2 border border-[#4A5D4E] text-[#4A5D4E] rounded-sm hover:bg-[#F3F0EC] transition-colors text-sm font-medium">Refresh</button>
            <button onClick={handleClear} className="px-6 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors text-sm font-medium">Clear All</button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A5D4E]"></div></div>
        ) : submissions.length === 0 ? (
          <div className="bg-white p-20 text-center rounded-sm border border-[#E8E4DE] shadow-sm"><p className="text-xl text-[#999999] serif italic">No enquiries found.</p></div>
        ) : (
          <div className="bg-white rounded-sm border border-[#E8E4DE] shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F3F0EC] border-b border-[#E8E4DE]">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#666666]">Date</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#666666]">Form Type</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#666666]">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#666666]">Details</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#666666]">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E4DE]">
                {submissions.map((s) => (
                  <tr key={s.id} className="hover:bg-[#FDFBF7] transition-colors">
                    <td className="px-6 py-6 whitespace-nowrap align-top">
                      <div className="text-sm font-medium text-[#1A1A1A]">{new Date(s.timestamp).toLocaleDateString()}</div>
                      <div className="text-xs text-[#999999]">{new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap align-top">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest ${s.formType === 'booking' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {s.formType}
                      </span>
                    </td>
                    <td className="px-6 py-6 align-top">
                      <div className="text-sm font-bold text-[#1A1A1A]">{s.name}</div>
                      <div className="text-sm text-[#4A5D4E]">{s.email}</div>
                      <div className="text-xs text-[#999999]">{s.phone}</div>
                    </td>
                    <td className="px-6 py-6 align-top">
                      {s.formType === 'booking' ? (
                        <>
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#4A5D4E]/10 text-[#4A5D4E] mb-1">{s.instrument}</div>
                          <div className="text-xs text-[#1A1A1A] font-bold">{s.duration} ({s.price})</div>
                          <div className="text-xs text-[#666666] italic capitalize">{s.studentType}</div>
                        </>
                      ) : (
                        <div className="text-xs text-[#666666] italic">General Enquiry</div>
                      )}
                    </td>
                    <td className="px-6 py-6 align-top max-w-md">
                      <div className="text-sm text-[#333333] leading-relaxed break-words">"{s.message || 'No message.'}"</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
