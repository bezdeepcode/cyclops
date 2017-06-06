/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import * as sinon from 'sinon';
import * as chai from 'chai';

// Local
import * as api from '../../cyphon/utils/cyphonAPI';
import * as distilleryAPI from './distilleryAPI';

describe('distilleryAPI', () => {
  describe('fetchAlertDistilleries', () => {
    it('should call out to the correct url', () => {
      const getAll = sinon.stub(api, 'getAll');

      distilleryAPI.fetchAllAlertDistilleries();

      chai.expect(getAll.called).to.be.true;
      chai.expect(getAll.args[0][0]).to.equal('/alerts/distilleries/');

      getAll.restore();
    });
  });

  describe('fetchAllDistilleries()', () => {
    it('should call out to the correct url', () => {
      const getAll = sinon.stub(api, 'getAll');

      distilleryAPI.fetchAllDistilleries();

      chai.expect(getAll.called).to.be.true;
      chai.expect(getAll.args[0][0]).to.equal('/distilleries/');

      getAll.restore();
    });
  });
});