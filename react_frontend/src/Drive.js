import React, { useState, useEffect } from 'react';
import { getItems, createFolder, uploadFile, deleteItem, renameItem } from './api';

export default function Drive({ token, user }) {
  const [items, setItems] = useState([]);
  const [parent, setParent] = useState(null);
  const [folderName, setFolderName] = useState('');
  const [file, setFile] = useState(null);
  const [path, setPath] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (token) {
      getItems(token, parent).then(setItems);
    }
  }, [token, parent, refresh]);

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    await createFolder(token, folderName, parent);
    setFolderName('');
    setRefresh(r => !r);
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    if (file) {
      await uploadFile(token, file, parent);
      setFile(null);
      setRefresh(r => !r);
    }
  };

  const handleDelete = async (id) => {
    await deleteItem(token, id);
    setRefresh(r => !r);
  };

  const handleRename = async (id) => {
    const name = prompt('Enter new name:');
    if (name) {
      await renameItem(token, id, name);
      setRefresh(r => !r);
    }
  };

  const openFolder = (item) => {
    setParent(item._id);
    setPath([...path, item]);
  };

  const goBack = () => {
    const newPath = [...path];
    newPath.pop();
    setPath(newPath);
    setParent(newPath.length ? newPath[newPath.length - 1]._id : null);
  };

  return (
    <div className="drive-container">
      <div className="drive-header">
        <button onClick={goBack} disabled={path.length === 0}>Back</button>
        <span className="drive-path">
          /{path.map(f => f.name).join('/')}
        </span>
        <span className="drive-user">{user.username}</span>
      </div>
      <form onSubmit={handleCreateFolder} className="drive-form">
        <input type="text" placeholder="New Folder" value={folderName} onChange={e => setFolderName(e.target.value)} />
        <button type="submit">Create Folder</button>
      </form>
      <form onSubmit={handleUploadFile} className="drive-form">
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload File</button>
      </form>
      <div className="drive-list">
        {items.map(item => (
          <div key={item._id} className={`drive-item drive-item-${item.type}`}>
            {item.type === 'folder' ? (
              <span onClick={() => openFolder(item)} className="drive-folder">📁 {item.name}</span>
            ) : (
              <span className="drive-file">
                {/\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(item.name) ? (
                  <img src={`http://localhost:5000${item.fileUrl}`} alt={item.name} style={{maxWidth:60, maxHeight:60, verticalAlign:'middle', marginRight:8, borderRadius:4, border:'1px solid #eee'}} onError={e => {e.target.style.display='none';}} />
                ) : null}
                <a href={`http://localhost:5000${item.fileUrl}`} target="_blank" rel="noopener noreferrer">📄 {item.name}</a>
              </span>
            )}
            <button onClick={() => handleRename(item._id)}>Rename</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
