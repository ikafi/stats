package fi.gosu.ika.stats.service;

import fi.gosu.ika.stats.domain.SpyReport;
import fi.gosu.ika.stats.repository.SpyReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * SpyReport Service
 *
 * Created by Joppe151617 on 30.4.2017.
 *
 */
@Service
public class SpyReportService {

    @Autowired private SpyReportRepository spyReportRepository;

    public List<SpyReport> findAll() {
        return spyReportRepository.findAll();
    }

    public SpyReport addSpyReport(SpyReport spyReport) {
        return spyReportRepository.save(spyReport);
    }

    public SpyReport findOne(Long id) {
        return spyReportRepository.findOne(id);
    }
}
